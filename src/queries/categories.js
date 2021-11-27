// import {query} from "../helpers/query";
import { query } from "./../helpers/query";

// export const requestCategoriesList = (payload) => query({
// 	uri: '/api/v1/categories',
// 	auth: false,
// 	data: payload
// });

/*TODO: ((Important)) when change to real request, need change all line using this code*/
export const requestCategoriesList = (payload = {tags: 'filters'}) =>
	query({
		uri: "/api/v1/categories",
		auth: false,
		params: payload,
	});
