import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RenderGrid from './RenderGrid'


class SearchAllBooks extends Component {

	render () {
		return (
		  <div className="search-books">
		    <div className="search-books-bar">
		      <Link to="/" className="close-search">Close</Link>
		      <div className="search-books-input-wrapper">
		        <input
		        	type="text"
		        	value={this.props.query}
		        	placeholder="Search by title or author"
		        	onChange={(event) => this.props.searchForBooks(event)}
		        />
		      </div>
		    </div>
		    <div className="search-books-results">
		      <RenderGrid
		      	books={this.props.books}
		      	searchResults={this.props.searchResults}
		      	updateBooks={this.props.updateBooks}
		      />
		    </div>
		  </div>
		)
	}
}


export default SearchAllBooks
