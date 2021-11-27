import {TYPES} from "../types";

const initialState = {
	basket: {
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
	}
}

export const Card = (state = initialState, { type, payload }) => {
	switch (type) {
		case TYPES.ADD_TO_BASKET:
			return {
				...state,
				basket: {
					...state.basket,
					items: [...payload]
				}
			}
		case TYPES.GET_BASKET:
			return {
					basket: {...state.basket,...payload}
			}	
			case TYPES.RESET_BASKET:
				return {
					...state,
					basket: payload
				}	
			case TYPES.CHANGE_SHIPPING_METHOD:
				return {
					...state,
					basket: {
						...state.basket,
						total_price: payload
					}
				}	
			case TYPES.UPDATE_TOTAL_PRICE:
				return {
					...state,
					basket: {
						...state.basket,
						total_price: payload
					}
				}
			case TYPES.UPDATE_INVALID_ITEMS: {
				const uniqueItems = {};
				const invalidItems = [ ...payload ];

				let filtered = invalidItems.filter(obj => !uniqueItems[obj.invalid_items.title] && (uniqueItems[obj.invalid_items.title] = true));
				debugger
				return	{
					...state,
					basket: {
						...state.basket,
						invalidItems: filtered
					}
				}
			}
		default:
			return state
	}
}
