import React from 'react'
import RenderBook from './RenderBook'
import escapeRegExp from 'escape-string-regexp';


function FilterBooks(props) {

	const checkShelf = function(book) {
		return props.book.shelf === props.shelf.name;
	}

	const match = new RegExp(escapeRegExp(props.query), 'i');

	const matchQuery = function(book) {
		if (props.query !== '') {
			return ((book) => match.test(props.book.title)) || ((book) => match.test(props.book.author));
		}
	}

	let booksDisplayed = function() {
		if (props.filterFunc === 'query') {
			props.books.filter(matchQuery);
		}
		if (props.filterFunc === 'shelf') {
			props.books.filter(checkShelf);
		}
	}

	let mapBooksGrid = function() {
		booksDisplayed.map((book) => (	
		<li className="book-info" key={props.book.id}>
		  <RenderBook
		    book={props.book}
		    moveToShelf={props.moveToShelf}
	      />
	    </li>
	  ))
	}

	return (<ol className="books-grid">{mapBooksGrid}</ol>)

}

export default FilterBooks



