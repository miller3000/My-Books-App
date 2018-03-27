import React, { Component } from 'react'
import BookInfo from './BookInfo'
import books from './BooksSelected'



	let booksOnShelf = books.filter((book) => ({book.shelf === shelf.name}));

	state = { booksOnShelf }
			      	booksOnShelf=this.state.booksOnShelf


			  <div>
			  	{props.shelves.map((shelf) => (		
				  <DisplayShelf
				    shelf={props.shelf}
				  />
				))}
			  </div>




class ShowInGrid extends Component {

	state = { books }

	const moveToShelf = (event) => {
	    this.setState({ shelf: event.target.value })
	}

    render () {
		return (
		  <ol className="books-grid">
		    <li>
		      <BookInfo
*	      		books={this.state.books}
*				moveToShelf={this.moveToShelf}
			  />
		    </li>
		    <li>
		      <BookInfo />
		    </li>
		  </ol> 
		)
	}
}

export default ShowInGrid

