import { query } from '../helpers/query'

export const getBlostPosts = () =>
	query(
		{
			method: 'GET',
			url: `https://calistu.ir/flora/wp-json/wp/v2/posts?_embed`,
			auth: false,
		}
	)
