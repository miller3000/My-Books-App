import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './ToggleSearch'
import ShowInGrid from './ShowInGrid'
import books from './BooksSelected'


(need search function?)
use book props in search
state determined by search input


class SearchAllBooks extends Component {
	render () {
		return (
		  <div className="search-books">
		    <div className="search-books-bar">
		      <a className="close-search" onClick={SEARCH.CLOSE}>Close</a>
		      <div className="search-books-input-wrapper">
		        {BOOKSAPI}
		        <input type="text" placeholder="Search by title or author"/>
		      </div>
		    </div>
		    <div className="search-books-results">
		      <SHOWINGRID>
		    </div>
		  </div>
		)
	}
}

export default SearchAllBooks
