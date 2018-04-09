import React from 'react'
import { Link } from 'react-router-dom'
import RenderGrid from './RenderGrid'

/**
 * SUMMARY: Renders search page in JSX code, including search bar and (if needed) a grid of search results (book objects).
 * PARENT: App.js
 * CHILD: RenderGrid.js
 * MORE INFO: App.js
 * @param {onChange function} searchForBooks [takes a string input from user and returns JSX code of matching book objects - MODIFIES STATE]
 * @param {string} query [string input from user] 
 *
 * Pass-through props:
 * - books {array of "book" objects}
 * - searchResults {array of "book" objects}
 * - updateBooks {onChange function}
 */

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
	        	onChange={(event) => props.onEnterQuery(event)}
	        />
	      </div>
	    </div>
	    <div className="search-books-results">
	      <RenderGrid
	      	books={props.books}
	      	onChangeShelf={props.onChangeShelf}
	      	searchResults={props.searchResults}
	      />
	    </div>
	  </div>
	)
}

export default SearchAllBooks
