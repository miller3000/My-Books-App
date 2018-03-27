import React, { Component } from 'react'
import ChangeBookShelf from './ChangeBookShelf'
import books from './BooksSelected'

books prop for html


class BookInfo extends Component {

	let book = {
		title: 'The Lake',
		author: 'Yasunari Kawabata',
		shelf: '',
		cover: 'https://books.google.com/books/content?id=1kPGUFLkvNEC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73uKwY96dAd64jdB5fuIJlTKtGiJ317KqV4LKOhLuWlP4AvZc__q5MCkxX0LKRlE7wJYvsCfhq9ssBk9jU7V6rbNcHew0aSQm_KG54bl1_2bQ2jV7iDez4PSkN1jf7qs-bE4_PL'
	};

	let state = book.props;

	const coverStyle = {
		width: 128,
		height: 193,
		backgroundImage: `url(${book.cover})`
	};

	const onShelfChange = (event) => {
		this.setState({ shelf: event.target.value })
	}

	render () {
		const book = this.props.book;
		return (
		  <div className="book">
		    <div className="book-top">
		      <div className="book-cover" style={coverStyle}></div>
		      <ChangeBookShelf
				book={this.props.book}
				onShelfChange={this.onShelfChange}
		      />
		    </div>
		    <div className="book-title">{book.title}</div>
		    <div className="book-authors">{book.author}</div>
		  </div>			
		)
	}
}

export default BookInfo
