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


	let mapGrid = function(books) {
		if (books) {
			console.log(mapBooks(books));
			return mapBooks(books);
		}
	}

//	
//	let grid = mapGrid(booksOnShelf);
//

	return (<ol className="books-grid">
				<div>
					{mapBooks}
				</div>
			</ol>)

/*	return(
		<ol className="books-grid">
			{booksOnShelf.map((book) => (
			<li className="book-info" key={book.id}>
			  <RenderBook
			    book={props.book}
			    books={props.books}
			    moveToShelf={props.moveToShelf}
				selectedShelf={props.selectedShelf}
		      />
		    </li>))}
		</ol>
		)
*/

}

export default RenderGrid



