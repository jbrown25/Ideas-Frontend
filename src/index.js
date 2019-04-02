import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'normalize.css';
import './styles/base.css';
import './styles/typography.css';

import App from './components/app';
import reducers from './reducers';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducers,
	{
		auth: {authenticated: localStorage.getItem('token')}
	},
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#root')
);