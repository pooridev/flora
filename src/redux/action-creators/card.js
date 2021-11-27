import { TYPES } from "./../types";

export const addToBasket = (payload) => ({
	type: TYPES.ADD_TO_BASKET,
	payload,
});

export const getBasket = (payload) => ({
	type: TYPES.GET_BASKET,
	payload,
});

export const changeShippingMethod = (payload) => ({
	type: TYPES.CHANGE_SHIPPING_METHOD,
	payload
})

export const resetBasket = () => ({
	type: TYPES.RESET_BASKET,
	payload: {
		items: [],
		invalidItems: [],
		price: {
			DIRHAMS: 0
		},
		shipping_flat_rate: 0,
		shipping_local_pickup: 0,
		shipping_max_datetime: '',
		shipping_min_datetime: '',
		sub_total_price: 0,
		total_price: 0,
	},
});