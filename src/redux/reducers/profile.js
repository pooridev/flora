import { TYPES } from "../types";

const initialState = {
	profile: {},
};

export const Profile = (state = initialState, { type, payload }) => {
	switch (type) {
    case TYPES.GET_PROFILE:
      return {
        profile: payload
      }
		default:
			return state;
	}
};
