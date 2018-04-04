import React from 'react'
import RenderBook from './RenderBook'
import * as FilterBooks from './FilterBooks';

function RenderGrid(props) {

	let books = props.books;
	let filterFunc = props.filterFunc;
	let searchResults = props.searchResults;
	let shelf = props.shelf;
	let booksOnShelf = FilterBooks.getResults(books, filterFunc, searchResults, shelf)

	let mapBooks = booksOnShelf.map((book) => (
		<li className="book-info" key={book.id}>
			<div className="book-on-shelf">
			  <RenderBook
			    book={book}
			    books={books}
			    moveToShelf={props.moveToShelf}
	            selectedShelf={props.selectedShelf}
	      	  />
			</div>
	    </li>
		)
	)

	return (<ol className="books-grid">{mapBooks}</ol>)

}

export default RenderGrid



