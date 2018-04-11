/**
* My Books
* 
* @react-DOM
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
* @prop book
*   {object with "title", "authors", "shelf", and other properties}
*   Represents one book and its properties
* @prop books
*   {array of "book" objects}
*   [props passed in from parents]
* @const booksOnShelf
*   {array of "book" objects}
*   Passed in arrays filtered through FilterBooks function,
*   to select either books on a particular shelf
*   or books that match a particular query.
* @local mapBooks
*   {map function}
*   Maps booksOnShelf array to JSX code
* @prop searchResults
*   {array of "book" objects}
*   [props passed in from parents]
* @prop shelf
*   {string}
*   [prop to be modified within book objects -- passed in from parents]
* @props:
*   - onChangeShelf {onChange function} - Pass-through only
* 
* @description
* Maps all book objects to an individual category (either query or
* shelf), depending on the FilterBooks function. Renders a grid of
* filtered books in JSX code.
*/

function RenderGrid(props) {
	const propTypes = { 
	  book: PropTypes.object.isRequired,
	  books: PropTypes.arrayOf(PropTypes.object).isRequired,
	  onChangeShelf: PropTypes.func.isRequired,
	};

	let books = props.books;
	let searchResults = props.searchResults;
	let shelf = props.shelf;
	let booksOnShelf = FilterBooks.getResults(books, searchResults, shelf)

	let mapBooks = booksOnShelf.map((book) => (
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

export default RenderGrid



