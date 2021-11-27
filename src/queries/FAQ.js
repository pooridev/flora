import { query } from 'helpers/query';

export const requestGetSinglePage= (pageId) =>
	query({
		uri: `/api/v1/pages/${pageId}`,
		auth: false
	})
