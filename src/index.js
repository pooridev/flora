import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {GetNavcardContextProvider} from './component/context/Navcardcontext';
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
		<GetNavcardContextProvider>
			<Router>
				<React.StrictMode>
					<App/>
				</React.StrictMode>
			</Router>
		</GetNavcardContextProvider>
	</Provider>,
    document.getElementById('root')
);
