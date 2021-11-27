import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {root_reducer} from "./reducers";

let middleware = applyMiddleware(thunk);
if(process.env.NODE_ENV === 'development') middleware = composeWithDevTools(middleware);

export const store = createStore(root_reducer, middleware);
