/**
* My Books React-DOM
* RENDERBOOK.JS
* PARENT: RenderGrid.js
* CHILDREN: SetBookShelf.js
* REACT COMPONENT TREE:
*
*           Index
*            |
*           App
* |----------|---------|
* ListMyBooks          SearchAllBooks
* RenderShelves        |
* |----------|---------|
*         RenderGrid
*            |
*         RenderBook
*            |
*         SetBookShelf
*/

import React from 'react'
import PropTypes from 'prop-types'
import SetBookShelf from './SetBookShelf'

/**
* Renders an individual book's thumbnail image, title, and author(s)
* in JSX code.
* @prop {object} 	book 		Passed in from parents - describes book
*	  Many properties, but pertinent ones as follows:
*   let book = {
*     title: 'string',
*	    authors: ['string', 'string'],
*     shelf: 'string',
*		  imageLink: imageLinks[thumbnail] 'string'
*	  };
* @prop {string}  defaultShelf 		Passed in from parents
*   if book passed in from parents does not have a "shelf" value,
*   then a "default" value is passed into SetBookShelf
* @prop {onChange function} onChangeShelf - Pass-through only
* @return JSX only
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

RenderBook.propTypes = {
  book: PropTypes.object,
  defaultShelf: PropTypes.string,
  onChangeShelf: PropTypes.func
};

export default RenderBook
