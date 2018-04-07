import React from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter  } from 'react-router-dom'
import { Router } from 'react-router-dom'
import App from './App.js'
import './index.css'

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

ReactDOM.render(
//	(<BrowserRouter>
//		<App />
//	</BrowserRouter>),
	(<Router history={history}>
		<App />
	</Router>),

	document.getElementById('root')
);
