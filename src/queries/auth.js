import {query} from "../helpers/query";

export const requestLogin = (payload) => query({
	uri: '/api/v1/auth/login',
	auth: false,
	method: 'POST',
	data: payload
});

export const requestGoogleLogin = (payload) => query({
	uri: '/api/v1/auth/login/google',
	auth: false,
	method: 'POST',
	data: payload
});

export const requestLogout = () => query({
	uri: '/api/v1/auth/logout'
});

export const requestRefresh = (payload, force = null) => query({
	uri: '/api/v1/auth/token/refresh',
	method: 'POST',
	data: payload
}, force);

export const requestRegister = (payload) => query({
	uri: '/api/v1/auth/register',
	auth: false,
	method: 'POST',
	data: payload
});

export const requestGetOTP = (payload) => query({
	uri: '/api/v1/auth/otp/send',
	auth: false,
	method: 'POST',
	data: payload
});

export const requestVerifyOTP = (payload) => query({
	uri: '/api/v1/auth/otp/verify',
	auth: false,
	method: 'POST',
	data: payload
});

export const requestChangePassword = (payload) => query({
	uri: '/api/v1/auth/password/change',
	auth: false,
	method: 'POST',
	data: payload
});