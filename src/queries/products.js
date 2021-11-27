import qs from 'qs'
import { query } from '../helpers/query'

export const requestProductsList = payload => {
	return query({
		uri: '/api/v1/products',
		auth: false,
		params: payload,
		paramsSerializer: params => {
			return qs.stringify(params, { arrayFormat: 'repeat' })
		},
	})
}

export const requestProductSingle = product_id =>
	query({
		uri: '/api/v1/products/' + product_id,
		auth: false,
	})

export const requestProductReviews = (payload, product_id) =>
	query({
		uri: `/api/v1/products/${product_id}/reviews`,
		auth: false,
		params: payload,
	})

export const requestProductAddReview = (payload, product_id) =>
	query({
		uri: `/api/v1/products/${product_id}/reviews`,
		auth: true,
		method: 'POST',
		data: payload,
	})

export const requestProductRelated = payload =>
	query({
		uri: '/api/v1/products/related',
		auth: false,
		params: payload,
	})

export const requestProductAddFavourite = payload =>
	query({
		uri: `/api/v1/products/${payload.product_id}/favourites`,
		auth: true,
		method: 'POST',
	})
	
export const requestProductRemoveSingleFavourite = payload =>
	query({
		uri: `/api/v1/products/favourites/${payload.product_id}`,
		auth: true,
		method: 'DELETE'
	})
		
export const requestCheckIsWishedProduct = payload =>
query({
	uri: `/api/v1/me/favourites/${payload.product_id}`,
	auth: true,
})


export const requestFavouritesList = payload =>
	query({
		uri: `/api/v1/me/favourites`,
		auth: true,
		params: payload,
	})

export const requestSingleFavourite= payload =>
	query({
		uri: `/api/v1/me/favourites/${payload.product_id}`,
		auth: true,
	})