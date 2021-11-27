import { query } from './../helpers/query';
import qs from 'qs'

export const requestOrdersList = payload => {
	return query({
		uri: '/api/v1/orders',
		auth: true,
		params: payload,
		paramsSerializer: params => {
			return qs.stringify(params, { arrayFormat: 'repeat' })
		},
	})
}

export const requestSingleOrder = payload => {
	return query({
		uri: `/api/v1/orders/${payload.order_id}`,
		auth: true,
	})
}

export const requestDeleteOrder = payload => {
	return query({
		uri: `/api/v1/orders/${payload.order_id}`,
		method: 'DELETE',
		auth: true,
	})
}

export const requestReOrder = payload => {
	return query({
		uri: `/api/v1/orders/${payload.order_id}/reorder`,
		auth: true,
	})
}

export const requestPayOrder = payload => {
	return query({
		uri: '/api/v1/orders/pay',
		auth: true,
		method: 'POST',
		data: payload
	})
}

export const requestPlaceOrder = payload => {
	return query({
		uri: '/api/v1/orders',
		auth: true,
		method: 'POST',
		data: payload
	})
}


export const requestSingleTransaction = payload => { // payload is transaction_code
	return query({
		uri: `/api/v1/payment/callBackUrl/${payload}/`,
		auth: true,
		data: payload
	})
}

export const requestApplyCouponCode = payload => {
	return query({
		uri: `/api/v1/coupons/${payload}/apply`,
		auth: true,
	})
}