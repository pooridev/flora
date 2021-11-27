import { TYPES } from "./../types";

export const getProfile = (payload) => ({
	type: TYPES.GET_PROFILE,
	payload,
});
