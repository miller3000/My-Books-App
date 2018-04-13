/**
* My Books React-DOM
* RENDERGRID.JS
* PARENT: RenderShelves.js, SearchAllBooks.js
* CHILDREN: RenderBook.js
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
import PropTypes from 'prop-types'
import RenderBook from './RenderBook'
import * as FilterBooks from './FilterBooks';

/**
* Maps all book objects to an individual category (either query or
* shelf), depending on the FilterBooks function. Renders a grid of
* filtered books in JSX code.
* @prop {object} 									book 		Represents book w/ title,
*       																	author, shelf, etc.
* @prop {array of book objects}		books 	Passed in from parents
* @const {array of book objects}  booksOnShelf
*   Passed in arrays filtered through FilterBooks function,
*   to select either books on a particular shelf
*   or books that match a particular query.
* @function {map function} 				mapBooks 	Maps booksOnShelf array
*      																			to JSX code
* @prop {onChangefunction}				onChangeShelf   Pass-through only
* @prop {array of book objects} 	searchResults	Passed in from parents
* @prop {string} 									shelf 	Passed in from parents
* @return JSX only
*/

function RenderGrid(props) {
	const books = props.books;
	const searchResults = props.searchResults;
	const shelf = props.shelf;
	const booksOnShelf = FilterBooks.getResults(books, searchResults, shelf)

	const mapBooks = booksOnShelf.map((book) => (
		<li key={book.id} className="book-info">
			<div className="book-on-shelf">
			  <RenderBook
			    book={book}
			    books={books}
					onChangeShelf={props.onChangeShelf}
	      	  />
			</div>
	    </li>
		)
	)

	return <ol className="books-grid">{mapBooks}</ol>
}

RenderGrid.propTypes = { 
  book: PropTypes.object,
  books: PropTypes.arrayOf(PropTypes.object),
  onChangeShelf: PropTypes.func
};

export default RenderGrid



