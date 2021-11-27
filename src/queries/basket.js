import { query } from "helpers/query";

export const requestAddToBasket = payload =>
	query({
		uri: '/api/v1/basket/items',
		auth: true,
		method: 'POST',
		data: payload
	})

export const requestGetBasket = () =>
	query({
		uri: '/api/v1/basket',
		auth: true,
	})

export const requestUpdateBasket = (payload) =>
	query({
		uri: '/api/v1/basket',
		auth: true,
		method: 'PATCH',
		data: payload
	})

export const requestUpdateBasketExtra = (payload) =>
	query({
		uri: '/api/v1/basket/extra',
		auth: true,
		method: 'PATCH',
		data: payload
	})

export const requstDeleteSingleFromBasket = (payload) =>
	query({
		uri: `/api/v1/basket/items/${payload.product_details_id}`,
		auth: true,
		method: 'DELETE',
	})

export const requstDeleteSingleFromBasketExtra = (payload) =>
	query({
		uri: `/api/v1/basket/extra/${payload.product_details_id}`,
		auth: true,
		method: 'DELETE',
	})