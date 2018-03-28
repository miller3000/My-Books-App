import React from 'react'
import FilterBooks from './FilterBooks'

function DisplayShelf(props) {

	const booksOnShelf = function(book) {
		return book.shelf === props.shelf.name
	}

	return (
		  <div className="bookshelf" key={props.shelf.key}>
		    <h2 className="bookshelf-title">{props.shelf.name}</h2>
		    <div className="bookshelf-books">
		      <FilterBooks
		      	books={props.books}
		        moveToShelf:{this.moveToShelf}
		      	shelf={props.shelf}
		      	filterFunc={props.booksOnShelf}
		      />
		    </div>
		  </div>
	)
}

export default DisplayShelf


