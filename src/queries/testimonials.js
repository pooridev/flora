import qs from 'qs'
import { query } from '../helpers/query'

export const getTestimonialsReq = payload => {
	return query({
		uri: '/api/v1/testimonials',
		auth: false,
		params: payload,
		// paramsSerializer: params => {
		// 	return qs.stringify(params, { arrayFormat: 'repeat' })
		// },
	})
}
