import { query } from "helpers/query";

export const requestSendMessage = (payload) =>
	query({
		uri: '/api/v1/contact',
		method: "POST",
		auth: false,
		data: payload,
	});
