import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App.js'
import './index.css'

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

ReactDOM.render(
	(<Router history={history}>
		<App history={history}/>
	</Router>),

	document.getElementById('root')
);
