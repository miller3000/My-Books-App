/**
* My Books React-DOM
* RENDERSHELVES.JS
* PARENT: ListMyBooks.js
* CHILDREN: RenderGrid.js
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
import RenderGrid from './RenderGrid'

/**
* Renders shelves within index (JSX) page. Maps each of three shelves
* to a separate grid of books.
* @function {map function}  allShelves	  Maps "shelves" array to JSX
* @prop {array of book objects}  books  			Pass-through only
* @prop {onChange Function} onChangeShelf 		Pass-through only
* @prop {object}								 shelf Book category w/ "id", "heading"
* @prop {array of shelf objects} shelves 	Categories to assign to books
* @return JSX only
*/

function RenderShelves(props) {
	const shelves = [
		{id: 'currentlyReading', heading: 'Currently Reading'},
		{id: 'wantToRead', heading: 'Want to Read'},
		{id: 'read', heading: 'Already Read'}
	];

	const allShelves = shelves.map((shelf) => (
	    <div key={shelf.id} className="bookshelf">
		    <h2 className="bookshelf-title">{shelf.heading}</h2>
			    <div className="bookshelf-books">
				  <RenderGrid
				  	books={props.books}
						onChangeShelf={props.onChangeShelf}
			      shelf={shelf}
			      shelves={shelves}
				  />
				</div>
		</div>
		))

	return <div>{allShelves}</div>
}

RenderShelves.propTypes = { 
  books: PropTypes.arrayOf(PropTypes.object),
  onChangeShelf: PropTypes.func,
  shelf: PropTypes.object,
  shelves: PropTypes.arrayOf(PropTypes.object)  
};

export default RenderShelves


