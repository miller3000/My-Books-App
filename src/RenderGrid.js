import React from 'react'
import RenderBook from './RenderBook'
import * as FilterBooks from './FilterBooks';

/**
 * SUMMARY: Maps all book objects within an individual category (either query or shelf, depending on the FilterBooks function) to JSX code that renders the appropriate individual books.
 * PARENTS: RenderShelves.js, SearchAllBooks.js
 * CHILD: RenderBook.js
 * MORE INFO: App.js
 *
 * @param {array of "book" objects} books [props passed in from parents]
 * @param {array of "book" objects} searchResults [props passed in from parents]
 * @param {string} shelf [prop to be modified within book objects -- passed in from parents]
 * @param {array of "book" objects} booksOnShelf [passed in arrays filtered through FilterBooks function, to select either books on a particular shelf or books that match a particular query]
 * @param {map function} mapBooks [maps booksOnShelf array to JSX code]
 *
 * Pass-through props:
 * - updateBooks {onChange function}
 */

function RenderGrid(props) {
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



