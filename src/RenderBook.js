import React from 'react'
import SetBookShelf from './SetBookShelf'

//	let book = {
//		title: 'string',
//		authors: ['string', 'string'],
//		shelf: 'string',
//		imageLink: imageLinks[thumbnail] 'string'
//		};



function RenderBook(props) {

	const book = props.book;
	const author = (book.authors) ? book.authors.join(', ') : '';
	const imageLink = (book.imageLinks) ? book.imageLinks.thumbnail : '';
	const defaultShelf = (book.shelf) ? book.shelf : 'default';

	return (
		<div className="book">
		    <div className="book-top">
		      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imageLink})` }}></div>
			      <SetBookShelf
					book={book}
					defaultShelf={defaultShelf}
					updateBooks={props.updateBooks}
			      />
		    </div>		    
		    <div className="book-title">{book.title}</div>
		    <div className="book-authors">{author}</div>
		  </div>	
	)

}

export default RenderBook
