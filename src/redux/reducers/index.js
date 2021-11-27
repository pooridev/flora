import {combineReducers} from "redux";
import {Card} from "./card";
import { Profile } from './profile'
import { Order } from './order';

export const root_reducer = combineReducers({
	Card,
	Profile,
	Order: Order
});
