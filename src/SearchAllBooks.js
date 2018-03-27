import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import FilterBooks from './FilterBooks'


(need search function?)
use book props in search
state determined by search input


class SearchAllBooks extends Component {
	render () {
		return (
		  <div className="search-books">
		    <div className="search-books-bar">
		      <Link to="/" className="close-search">Close</Link>
		      <div className="search-books-input-wrapper">
		        {BOOKSAPI}
		        <input type="text" placeholder="Search by title or author"/>
		      </div>
		    </div>
		    <div className="search-books-results">
		      <FilterBooks/>
		    </div>
		  </div>
		)
	}
}

export default SearchAllBooks
