import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RenderGrid from './RenderGrid'
import * as BooksAPI from './BooksAPI'


class SearchAllBooks extends Component {

	state = { query: '', searchResults: [] };

	updateQuery = (newQuery) => {
		this.setState({ query: newQuery.trim() })
	}

	searchAPI = (query, searchResults) => {
		BooksAPI.search(query).then(books => this.setState({ searchResults: books }));
	}

	getBooks = (query, searchResults, event) => {
		this.updateQuery(event.target.value);
		this.searchAPI(this.state.query, this.state.searchResults);
		console.log(this.state.query);
		console.log(this.state.searchResults);
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
		        	onChange={(event) => this.getBooks(this.state.query, this.state.searchResults, event)}
		        />
		      </div>
		    </div>
		    <div className="search-books-results">
		      <RenderGrid
		      	books={this.props.books}
		      	filterFunc={this.filterFunc}
//		      	moveToShelf={this.props.moveToShelf}
		      	searchResults={this.state.searchResults}
		      	updateBooks={this.props.updateBooks}
		      />
		    </div>
		  </div>
		)
	}
}


export default SearchAllBooks
