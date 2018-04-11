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
* @description
* Renders React-DOM within React-Router.
* More app information provided in App.js.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

//PASS LOCATION (PATHNAME) HISTORY TO APP.JS
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App.js'
import './index.css'

const history = createBrowserHistory();

ReactDOM.render(
	(<Router history={history}>
		<App history={history}/>
	</Router>),
	document.getElementById('root')
);
