import { query } from '../helpers/query'

export const createEmailSubscriptionReq = payload => {
	return query({
		uri: `/api/v1/subscriptions`,
		auth: false,
		data: payload,
		method: 'POST',
	})
}
