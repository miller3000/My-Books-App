/**
* My Books
* 
* @react-DOM
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
* @prop book
*   {object}
*   [props passed in from parents;
*   describes a particular book;
*   many properties, but pertinent as follows]:
*    	let book = {
*     	 title: 'string',
*	       authors: ['string', 'string'],
*        shelf: 'string',
*		     imageLink: imageLinks[thumbnail] 'string'
*	  };
*	   
* @prop defaultShelf
*   {string}
*   [prop passed in from parents;
*   if book passed in from parents does not have a "shelf" value,
*   then a "default" value is passed into SetBookShelf]
*
* @props:
* 	- onChangeShelf {onChange function} - Pass-through only
* 
* @description
* Renders an individual book's thumbnail image, title, and author(s) in JSX code.
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
  book: PropTypes.object.isRequired,
  defaultShelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default RenderBook
