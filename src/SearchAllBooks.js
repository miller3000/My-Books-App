import React from 'react'
import { Link } from 'react-router-dom'
import RenderGrid from './RenderGrid'


function SearchAllBooks (props) {
	return (
	  <div className="search-books">
	    <div className="search-books-bar">
	      <Link to="/" className="close-search">Close</Link>
	      <div className="search-books-input-wrapper">
	        <input
	        	type="text"
	        	value={props.query}
	        	placeholder="Search by title or author"
	        	onChange={(event) => props.searchForBooks(event)}
	        />
	      </div>
	    </div>
	    <div className="search-books-results">
	      <RenderGrid
	      	books={props.books}
	      	searchResults={props.searchResults}
	      	updateBooks={props.updateBooks}
	      />
	    </div>
	  </div>
	)
}


export default SearchAllBooks
