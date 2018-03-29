import React from 'react'
import RenderBook from './RenderBook'


function FilterBooks(props) {

	let booksDisplayed = props.books.filter(filterFunc);

	return (
	  <ol className="books-grid">
   	  {props.booksDisplayed.map((book) => (	
		<li className="book-info" key={props.books.id}>
		  <RenderBook
		    book={props.book}
		    moveToShelf={moveToShelf}
	      />
	    </li>
	  ))}
   	  </ol>
	)
}

export default FilterBooks



