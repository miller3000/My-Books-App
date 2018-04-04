import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RenderGrid from './RenderGrid'


class SearchAllBooks extends Component {

	state = { q: '' };

	updateQuery = (newQuery) => {
		this.setState({ q: newQuery.trim() })
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
		        	value={this.state.q}
		        	placeholder="Search by title or author"
		        	onChange={(event) => this.updateQuery(event.target.value)}
		        />
		      </div>
		    </div>
		    <div className="search-books-results">
		      <RenderGrid
		      	books={this.props.books}
		      	filterFunc={this.filterFunc}
		      	moveToShelf={this.props.moveToShelf}
		      	q={this.state.q}
          		value={this.props.value}
		      />
		    </div>
		  </div>
		)
	}
}


export default SearchAllBooks
