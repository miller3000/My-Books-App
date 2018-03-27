import React, { Component } from 'react'
import FilterBooks from './FilterBooks'

function DisplayShelf(props) {

	const booksOnShelf = function(book) {
		return book.shelf === shelf.name
	}

	return (
		  <div className="bookshelf" className={props.shelf.name} key={props.shelf.key}>
		    <h2 className="bookshelf-title">{props.shelf.name}</h2>
		    <div className="bookshelf-books">
		      <FilterBooks
		      	shelf={props.shelf}
		      	filterFunc={props.booksOnShelf}
		      />
		    </div>
		  </div>
	)
}

export default DisplayShelf


