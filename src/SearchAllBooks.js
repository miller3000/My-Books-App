import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI'
import FilterBooks from './FilterBooks'


class SearchAllBooks extends Component {

	state = { query: '' }

	const updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	const matchInput = function(book) {
		if (query) {
			let match = new RegExp(escapeRegExp(query), 'i');
			return ((book) => match.test(book.title)) || ((book) => match.test(book.author));
		}
	}

	render () {
		return (
		  <div className="search-books">
		    <div className="search-books-bar">
		      <Link to="/" className="close-search">Close</Link>
		      <div className="search-books-input-wrapper">
		        {BOOKSAPI}
		        <input
		        	type="text"
		        	value={query}
		        	placeholder="Search by title or author"
		        	onChange={(event) => this.updateQuery(event.target.value)}
		        />
		      </div>
		    </div>
		    <div className="search-books-results">
		      <FilterBooks
		      	filterFunc={props.matchInput}
		      />
		    </div>
		  </div>
		)
	}
}

export default SearchAllBooks
