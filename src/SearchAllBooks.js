import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FilterBooks from './FilterBooks'


class SearchAllBooks extends Component {

	state = { query: '' };

	updateQuery = (newQuery) => {
		this.setState({ query: newQuery.trim() })
	}

	filterFunc = 'query';

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
		      	query={this.state.query}
		      	filterFunc={this.filterFunc}
		      />
		    </div>
		  </div>
		)
	}
}


export default SearchAllBooks
