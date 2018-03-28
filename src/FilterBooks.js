import React, { Component } from 'react'
import BookInfo from './BookInfo'


class FilterBooks extends Component {

	let booksDisplayed = this.props.books.filter(this.props.filterFunc);

    render () {
		return (
		  <ol className="books-grid">
       	  {this.props.booksDisplayed.map((book) => (	
			<li className="book-info" key={book.id}>
			  <BookInfo
			    book={this.props.book}
			    moveToShelf={this.moveToShelf}
		      />
		    </li>
		  ))}
       	  </ol>
		)
	}
}

export default FilterBooks



