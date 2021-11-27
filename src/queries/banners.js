import { query } from '../helpers/query'

export const getBannersReq = payload => {
	return query({
		uri: `/api/v1/banners`,
		params: payload,
		auth: false
	})
}
