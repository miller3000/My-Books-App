import React, { Component } from 'react'
import DisplayShelf from './DisplayShelf'
import Search from './ToggleSearch'
import books from './BooksSelected'


(import?) state = which books on which shelves -- this is books props


class ListAllBooks extends Component {
	render () {
		return (
			<div className="list-books">
				<div className="list-books-title">
				  <h1>MyReads</h1>
				</div>
				<div className="list-books-content">
				  <div>
				    <DISPLAYSHELF>
				    <DISPLAYSHELF>
				    <DISPLAYSHELF>
				  </div>
				</div>
	            <div className="open-search">
	              <a onClick={SEARCH.OPEN}>Add a book</a>
	            </div>
			</div>
		)
	}
}

export default ListAllBooks
