/**
* My Books
* 
* @react-DOM
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
* @props:
*   - books {array of "book" objects} - Pass-through only
*   - onChangeShelf {onChange function} - Pass-through only
* @description
* Renders index page in JSX code, including page title and
* three shelves holding books, as well as link to search page.
* More app information provided in App.js.
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
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default ListMyBooks
