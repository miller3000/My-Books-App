import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp';
import FilterBooks from './FilterBooks'


class SearchAllBooks extends Component {

	state = { query: '' };

	updateQuery = (newQuery) => {
		this.setState({ query: newQuery.trim() })
	}

	matchInput = function(book) {
		if (this.state.query !== '') {
			let match = new RegExp(escapeRegExp(this.state.query), 'i');
			return ((book) => match.test(this.props.book.title)) || ((book) => match.test(this.props.book.author));
		}
	}

	render () {
		return (
		  <div className="search-books">
		    <div className="search-books-bar">
		      <Link to="/" className="close-search">Close</Link>
		      <div className="search-books-input-wrapper">
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
		      	books={this.props.books}
		      	moveToShelf={this.props.moveToShelf}
		      	filterFunc={this.matchInput}
		      />
		    </div>
		  </div>
		)
	}
}


export default SearchAllBooks
