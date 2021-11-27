import Axios from 'axios'
import { Configs } from '../configs'
import { db } from './db'
import { requestRefresh } from '../queries/auth'
import { CustomAlert } from './alert'
import {FullDateTime, HumanDateTime} from "./datetime";
import {ParseJWT} from "./auth";

const instance = Axios.create({ })

instance.interceptors.response.use(response => response,
	(error) => {
		const {refresh_token} = db.get('tokens');
		const originalRequest = error.config;
		const Logout = () => {
			db.del('tokens');
			window.location.reload();
		}

		// if (error.response.status === 401 && originalRequest.url === Configs.API_URL + '/api/v1/auth/token/refresh') {
		//   Logout();
		//   return Promise.reject(error.response);
		// }

		if (error.response.status === 401 && !originalRequest._retry){
			originalRequest._retry = true;

			requestRefresh({refresh_token: refresh_token })
				.then(response => {
					if (response.status === 200) {
						db.set('tokens', response.data);
						originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
						return instance.request(originalRequest);
					}
					else {
						Logout()
						return Promise.reject(error.response);
					}
				}).catch(error => error )

		}
		return Promise.reject(error.response);
	}
);



if(!Configs.IS_PRODUCTION && db.get('tokens') && db.get('tokens')['access_token']) {
	console.log('%c Token expired: ' + HumanDateTime(ParseJWT(db.get('tokens')['access_token'])['exp'] * 1000) + ` (${FullDateTime(ParseJWT(db.get('tokens')['access_token'])['exp'] * 1000)})`, 'color: deeppink');
}
console.log('%cFIX BUG', 'color: red;font-size: 25px;');
export const query = ({uri, auth = true,...other}, force = null) => new Promise((resolve, reject) => {
	let PAYLOAD = {
		url: Configs.API_URL + uri,
		headers: {},
		...other
	};
	if(!auth) delete PAYLOAD['headers']['Authorization']
	else PAYLOAD['headers']['Authorization'] = 'Bearer ' + db.get('tokens')['access_token'];
	if(force) PAYLOAD = force;
	// @ts-ignore
	instance(PAYLOAD).then(response => {
		!Configs.IS_PRODUCTION && console.table({
			uri: uri,
			method: PAYLOAD.method || 'GET',
			status: response.status,
			response: response.data
		});
		resolve({
			HTTP_STATUS_CODE: response.status,
			...response.data
		})

		// if (!response.success) reject(response)
	}).catch(error => {
		reject(error)
	})
})
