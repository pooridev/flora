import Axios from "axios";
import { requestRefresh } from "queries/auth";
import { db } from "./../helpers/db";
import { Configs } from './../configs/index';

export const AxiosInstance = Axios.create({});

// for multiple requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});

	failedQueue = [];
};

const logout = () => {
	db.del('tokens')
	window.location.reload()
}

AxiosInstance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		const originalRequest = error.config;
		debugger
		if (error.response.status === 401 && error.config.url === Configs.API_URL + '/api/v1/auth/token/refresh') {
			logout()
		}

		if (error.response.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
				return new Promise(function (resolve, reject) {
					failedQueue.push({ resolve, reject });
				})
					.then((token) => {
						originalRequest.headers["Authorization"] =
							"Bearer " + token.access_token;
						return AxiosInstance(originalRequest);
					})
					.catch((err) => {
						return Promise.reject(err);
					});
			}

			originalRequest._retry = true;
			isRefreshing = true;

			const refreshToken = db.get("tokens")["refresh_token"];

			return new Promise(function (resolve, reject) {
				requestRefresh({ refresh_token: refreshToken })
					.then(({ data }) => {
						db.set("tokens", data);
						AxiosInstance.defaults.headers.common["Authorization"] =
							"Bearer " + data.access_token;
						originalRequest.headers["Authorization"] =
							"Bearer " + data.access_token;
						processQueue(null, data.access_token);
						resolve(AxiosInstance(originalRequest));
					})
					.catch((err) => {
						processQueue(err, null);
						db.del("tokens");
						window.location.reload();
						reject(err);
					})
					.finally(() => {
						isRefreshing = false;
					});
			});
		}

		return Promise.reject(error);
	}
);
