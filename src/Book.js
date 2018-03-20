import React, { Component } from 'react'
import ChangeBookShelf from './ChangeBookShelf'
import books from './BooksSelected'

books prop for html


class Book extends Component {
	render () {
		return (
		  <div className="book">
		    <div className="book-top">
		      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'books...' }}></div>
		      <CHANGEBOOKSHELF>
		    </div>
		    <div className="book-title">{books}</div>
		    <div className="book-authors">{books}</div>
		  </div>			
		)
	}
}

export default Book
