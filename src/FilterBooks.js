import React, { Component } from 'react'
import BookInfo from './BookInfo'


class FilterBooks extends Component {

	state = {
		books: books,
		booksDisplayed: this.state.books.filter(this.props.filterFunc)
	}


	moveToShelf = function(book) {
		this.setState({ shelf: event.target.value })
	}

    render () {
		return (
		  <ol className="books-grid">
       	  {this.state.booksDisplayed.map((book) => (	
			<li className="book-info" key={book.title}>
			  <BookInfo
			    book={this.state.book}
			    moveToShelf={this.moveToShelf}
		      />
		    </li>
		  ))}
       	  </ol>
		)
	}
}

export default FilterBooks



