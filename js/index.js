require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import MainDisplay from './components/main-display';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render (
		<Provider store={store}>
			<GameDisplay />
		</Provider>,
		document.getElementById('app')
	)
);
