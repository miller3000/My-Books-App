import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI'
import FilterBooks from './FilterBooks'


class SearchAllBooks extends Component {

	query = '';

	state = { query: '' };

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	matchInput = function(book) {
		if (this.state.query) {
			let match = new RegExp(escapeRegExp(this.state.query), 'i');
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
		        	value={this.state.query}
		        	placeholder="Search by title or author"
		        	onChange={(event) => this.updateQuery(event.target.value)}
		        />
		      </div>
		    </div>
		    <div className="search-books-results">
		      <FilterBooks
		      	filterFunc={this.props.matchInput}
		      />
		    </div>
		  </div>
		)
	}
}

export default SearchAllBooks
