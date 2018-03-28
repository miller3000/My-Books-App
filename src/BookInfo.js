import React, { Component } from 'react'
import ChangeBookShelf from './ChangeBookShelf'


class BookInfo extends Component {

//	let book = {
//		title: 'string',
//		authors: ['string', 'string']
//		shelf: 'string'
//		imageLink: imageLinks[thumbail] 'string'
//		};

	let book = this.props.book;
	let author = book.authors.join(', ');
	let imageLink = book.imageLinks.thumbnail;

	render () {
		return (
		  <div className="book">
		    <div className="book-top">
		      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imageLink})` }}></div>
		      <ChangeBookShelf
				book={book}
				moveToShelf={this.moveToShelf}
		      />
		    </div>
		    <div className="book-title">{book.title}</div>
		    <div className="book-authors">{author}</div>
		  </div>			
		)
	}
}

export default BookInfo
