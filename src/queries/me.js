import { query } from "helpers/query";

export const requestGetProfile= () =>
	query({
		uri: `/api/v1/me`,
		auth: true,
	});

	
export const requestUpdateProfile = (payload) =>
	query({
		uri: `/api/v1/me`,
		auth: true,
		method: 'PATCH',
		data: payload 
	});

export const requestUploadAvatar = (payload) =>
	query({
		uri: `/api/v1/me/avatar`,
		auth: true,
		method: 'POST',
		data: payload ,
		headers: {'Content-Type': 'multipart/form-data'}
	});


export const requestDeleteAddress = (payload) =>
	query({
		uri: `/api/v1/me/addresses/${payload.address_id}`,
		auth: true,
		method: 'DELETE'
	});

	
export const requestUpdateAddress = (payload) =>
	query({
		uri: `/api/v1/me/addresses/${payload.address_id}`,
		auth: true,
		method: 'PATCH',
		data: payload.body
	});

export const requestNewAddress = (payload) =>
	query({
		uri: `/api/v1/me/addresses`,
		auth: true,
		method: 'POST',
		data: payload
	});



