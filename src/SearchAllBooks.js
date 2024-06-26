/**
* My Books React-DOM
* SEARCHALLBOOKS.JS
* PARENT: App.js
* CHILDREN: RenderGrid.js
* REACT COMPONENT TREE:
*
*           Index
*            |
*           App
* |----------|---------|
* ListMyBooks          SearchAllBooks
* RenderShelves        |
* |----------|---------|
*         RenderGrid
*            |
*         RenderBook
*            |
*         SetBookShelf
*/

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import RenderGrid from './RenderGrid'

/**
 * Renders search page in JSX code, including search bar and (if
 * needed) a grid of search results (book objects).
 * @prop {array of book objects} books          Pass-through only
 * @prop {onChange function}     onChangeShelf  Pass-through only
 * @prop {onChange function}     onEnterQuery
 *   Takes a string input ("query") from user and returns JSX code
 *   of book objects. Modifies state of "searchResults" array.
 * @prop {string} query
 *   Text input from user, string used to filter books for render.
 * @prop {array of book objects} searchResults  Pass-through only
 * @return JSX only
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

SearchAllBooks.propTypes = {   
  books: PropTypes.arrayOf(PropTypes.object),
  onChangeShelf: PropTypes.func,
  onEnterQuery: PropTypes.func,
  query: PropTypes.string,
  searchResults: PropTypes.arrayOf(PropTypes.object)
};

export default SearchAllBooks
