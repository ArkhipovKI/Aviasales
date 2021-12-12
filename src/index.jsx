import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import { createStore, compose, applyMiddleware } from 'redux';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		})
		: compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

