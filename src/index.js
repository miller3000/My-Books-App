import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App.js'
import './index.css'

/**
 * SUMMARY: Parent React component to main App component. Sets rendered app within a Router that passes through location (pathname) history to App.
 * PARENT: None
 * CHILD: App.js
 * MORE INFO: App.js
 */

const history = createBrowserHistory();

ReactDOM.render(
	(<Router history={history}>
		<App history={history}/>
	</Router>),
	document.getElementById('root')
);
