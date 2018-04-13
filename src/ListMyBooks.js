/**
* My Books React-DOM
* LISTMYBOOKS.JS
* PARENT: App.js
* CHILDREN: RenderShelves.js
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

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import RenderShelves from './RenderShelves'

/**
* Renders index page in JSX code, including page title and
* three shelves holding books, as well as link to search page.
* @prop {array of objects}	books 					Pass-through only
* @prop {onChange function} onChangeShelf		Pass-through only
* @return JSX only
*/

function ListMyBooks(props) {
	return (
		<div className="list-books">
			<div className="list-books-title">
			  <h1>My Books</h1>
			</div>
			<div className="list-books-content">
			  <RenderShelves
			  	books={props.books}
					onChangeShelf={props.onChangeShelf}
			  />
			</div>
	        <div className="open-search">
	          <Link to="/search">Add a book</Link>
	        </div>
		</div>
	)
}

ListMyBooks.propTypes = {   
  books: PropTypes.arrayOf(PropTypes.object),
  onChangeShelf: PropTypes.func
};

export default ListMyBooks
