import React from 'react'
import FilterBooks from './FilterBooks'

function RenderShelf(props) {

	let shelf = props.shelf;

	let booksOnShelf = function(book) {
		return props.book.shelf === props.shelf.name
	}

	return (
		  <div className="bookshelf" key={shelf.key}>
		    <h2 className="bookshelf-title">{shelf.name}</h2>
		    <div className="bookshelf-books">
		      <FilterBooks
		      	books={props.books}
		        moveToShelf:{moveToShelf}
		      	shelf={shelf}
		      	filterFunc={booksOnShelf}
		      />
		    </div>
		  </div>
	)
}

export default RenderShelf


