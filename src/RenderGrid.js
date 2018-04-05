import React from 'react'
import RenderBook from './RenderBook'
import * as FilterBooks from './FilterBooks';

function RenderGrid(props) {

	let books = props.books;
	let searchResults = props.searchResults;
	let shelf = props.shelf;

	let booksOnShelf = FilterBooks.getResults(books, searchResults, shelf)

	let mapBooks = booksOnShelf.map((book) => (
		<li className="book-info" key={book.id}>
			<div className="book-on-shelf">
			  <RenderBook
			    book={book}
			    books={books}
				updateBooks={props.updateBooks}
	      	  />
			</div>
	    </li>
		)
	)

	return (<ol className="books-grid">{mapBooks}</ol>)

}

export default RenderGrid



