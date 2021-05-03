import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./store/reducers";
import promiseMiddleware from "redux-promise";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(
	applyMiddleware(promiseMiddleware)
)(createStore);



ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById("root")
);
