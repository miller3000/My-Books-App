import React from 'react'
import SetBookShelf from './SetBookShelf'


/**
 * SUMMARY: Renders an individual book's thumbnail image, title, and author(s) in JSX code.
 * PARENT: RenderGrid.js
 * CHILD: SetBookShelf.js
 * MORE INFO: App.js
 *
 * @param {object} book [props passed in from parents; describes a particular book; many properties, but pertinent as follows:
//	let book = {
//		title: 'string',
//		authors: ['string', 'string'],
//		shelf: 'string',
//		imageLink: imageLinks[thumbnail] 'string'
//		};
 * @param {string} defaultShelf [prop passed in from parents; if book passed in from parents does not have a "shelf" value, then a "default" value is passed into SetBookShelf]
 *
 * Passed-through props:
 * - updateBooks {onChange function}
 */


function RenderBook(props) {
	const book = props.book;
	const author = (book.authors) ? book.authors.join(', ') : '';
	const imageLink = (book.imageLinks) ? book.imageLinks.thumbnail : '';
	const defaultShelf = (book.shelf) ? book.shelf : 'default';

	return (
		<div className="book">
		    <div className="book-top">
		      <div
		      	className="book-cover"
		      	style={{ width: 128, height: 192, backgroundImage: `url(${imageLink})` }}
		      />
			      <SetBookShelf
					book={book}
					defaultShelf={defaultShelf}
					onChangeShelf={props.onChangeShelf}
			      />
		    </div>		    
		    <div className="book-title">{book.title}</div>
		    <div className="book-authors">{author}</div>
		  </div>	
	)
}

export default RenderBook
