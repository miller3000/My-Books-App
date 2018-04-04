import React from 'react'
import RenderBook from './RenderBook'
import * as FilterBooks from './FilterBooks';


function RenderGrid(props) {

	let books = props.books;
	let filterFunc = props.filterFunc;
	let query = props.query;
	let shelf = props.shelf;

	let booksOnShelf = FilterBooks.getResults(books, filterFunc, query, shelf);

	const mapBooks = function(booksOnShelf) {
		booksOnShelf.map((book) => (
		<li className="book-info" key={book.id}>
		  <RenderBook
		    book={book}
		    books={props.books}
		    moveToShelf={props.moveToShelf}
            value={props.value}
	      />
	    </li>
	  ))	
	}

	const mapGrid = function(books) {
		if (booksOnShelf) { return mapBooks(books) }
	}
	
	let grid = mapGrid(booksOnShelf);

	return (<ol className="books-grid">{grid}</ol>)
}

export default RenderGrid



