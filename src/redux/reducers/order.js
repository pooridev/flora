import { TYPES } from "../types";

const initialState = {
	order: {
		hasInvalidProducts: false,
		delivery_address_id: "",
		payment_type: "",
		is_used_wallet: false,
		is_express_shipping: false,
		gift_message: "",
		special_request: "",
		delivery_datetime: "",
		delivery_frequency: "1",
	},
};

export const Order = (state = initialState, { type, payload }) => {
	switch (type) {
		case TYPES.GET_ORDER:
			return { ...state.order, order: payload };
		case TYPES.ADD_SUBSCRIPTION:
			return { order: { ...state.order, subscription: payload } };
		case TYPES.UPDATE_SHIPPING_METHOD:
			return { order: { ...state.order, is_express_shipping: payload } };
		case TYPES.UPDATE_PAYMENT_TYPE:
			return { order: { ...state.order, payment_type: payload } };
		case TYPES.UPDATE_DELIVERY_ADDRESS_ID:
			return { order: { ...state.order, delivery_address_id: payload } };
		case TYPES.UPDATE_GIFT_MESSAGE:
			return { order: { ...state.order, gift_message: payload } };
		case TYPES.UPDATE_SPECEAL_REQUEST:
			return { order: { ...state.order, special_request: payload } };
		case TYPES.UPDATE_DELIVERY_DATETIME: {
			const ISO_DATETIME = new Date(payload).toISOString();
			return {
				order: { ...state.order, delivery_datetime: ISO_DATETIME },
			};
		}
		case TYPES.UPDATE_DELIVERY_FREQUENCy:
			return { order: { ...state.order, delivery_frequency: payload } };
		case TYPES.UPDATE_PRODUCT_VALIDITY:
			return { order: { ...state.order, hasInvalidProducts: true } };
		default:
			return state;
	}
};
