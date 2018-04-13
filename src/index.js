/**
* My Books
* 
* @react-DOM
* INDEX.JS
* PARENT: none
* CHILDREN: App.js
* REACT COMPONENT TREE:
*
*           Index
*            |
*           App
* |----------|---------|
* ListMyBooks          SearchAllBooks
* RenderShelves        |
* |----------|---------|
*         RenderGrid
*            |
*         RenderBook
*            |
*         SetBookShelf
*/

/**
* Renders React-DOM within React-Router.
* More information provided in README and in App.js.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App.js'
import './index.css'

//PASS LOCATION (PATHNAME) HISTORY TO APP.JS
const history = createBrowserHistory();

ReactDOM.render(
	(<Router history={history}>
		<App history={history}/>
	</Router>),
	document.getElementById('root')
);
