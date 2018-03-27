import React, { Component } from 'react'
import FilterBooks from './FilterBooks'

function DisplayShelf(props) {
	return (
		  <div className="bookshelf" className={props.shelf.name} key={props.shelf.key}>
		    <h2 className="bookshelf-title">{props.shelf.name}</h2>
		    <div className="bookshelf-books">
		      <FilterBooks
		      	shelf={props.shelf}
		      />
		    </div>
		  </div>
	)
}

export default DisplayShelf


