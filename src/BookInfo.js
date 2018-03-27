import React, { Component } from 'react'
import ChangeBookShelf from './ChangeBookShelf'


class BookInfo extends Component {

//	let book = {
//		title: 'The Lake',
//		author: 'Yasunari Kawabata',
//		shelf: '',
//		cover: 'https://books.google.com/books/content?id=1kPGUFLkvNEC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73uKwY96dAd64jdB5fuIJlTKtGiJ317KqV4LKOhLuWlP4AvZc__q5MCkxX0LKRlE7wJYvsCfhq9ssBk9jU7V6rbNcHew0aSQm_KG54bl1_2bQ2jV7iDez4PSkN1jf7qs-bE4_PL'
//	};

	render () {
		return (
		  <div className="book">
		    <div className="book-top">
		      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url({this.props.book.cover})'}}></div>
		      <ChangeBookShelf
				book={this.props.book}
				moveToShelf={this.props.moveToShelf}
		      />
		    </div>
		    <div className="book-title">{this.props.book.title}</div>
		    <div className="book-authors">{this.props.book.author}</div>
		  </div>			
		)
	}
}

export default BookInfo
