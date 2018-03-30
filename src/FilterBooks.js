import React from 'react'
import RenderBook from './RenderBook'
import escapeRegExp from 'escape-string-regexp';


function FilterBooks(props) {

	const checkShelf = function(book, shelf) {
		if (props.shelf) {
			return book.shelf === props.shelf.id;
		}
	}

	const matchQuery = function(book) {
		if (props.query) {
			let match = new RegExp(escapeRegExp(props.query), 'i');
			return match.test(book.title) || match.test(book.authors.join(', '));
		}
	}

	let displayShelfOrSearch = function(books, shelf) {
		if (props.filterFunc === 'query') {
			return props.books.filter((book) => matchQuery(book))
		}
		if (props.filterFunc === 'shelf') {
			return props.books.filter((book) => checkShelf(book, shelf));
		}
	}

	let grid = displayShelfOrSearch(props.books).map((book) => (
		<li className="book-info" key={book.id}>
		  <RenderBook
		    book={book}
		    books={props.books}
		    moveToShelf={props.moveToShelf}
	      />
	    </li>
	  ))
		
	return (<ol className="books-grid">{grid}</ol>)
}

export default FilterBooks



