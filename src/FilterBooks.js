import React, { Component } from 'react'
import BookInfo from './BookInfo'
import books from './BooksSelected'


class FilterBooks extends Component {

	state = { books }

	let booksDisplayed = this.state.books.filter(filterFunc);

	const moveToShelf = function(book) {
		this.setState(state) => ({ book.shelf: event.target.value })
	}

    render () {
		return (
		  <ol className="books-grid">
       	  {props.booksDisplayed.map((book) => (	
			<li className="book-info" className={book.title} key={book.title}>
			  <BookInfo
			    book={this.state.book}
			    moveToShelf={this.props.moveToShelf}
		      />
		    </li>
		  ))}
       	  </ol>
		)
	}
}

export default FilterBooks



