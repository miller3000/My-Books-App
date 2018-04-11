/**
* My Books
* 
* @react-DOM
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
* @local allShelves
*   {map function}
*   Maps "shelves" array to JSX code
* @prop shelf
*   {object}
*   Book category with "id" and "heading" properties
* @prop shelves
*   {array of shelf objects}
*   Categories to assign to book objects 
* @props:
*   - books {array of "book" objects} - Pass-through only
*   - onChangeShelf {onChange function} - Pass-through only
* @description
* Renders shelves within index (JSX) page.
* Maps each of three shelves to a separate grid of books.
* More app information provided in App.js.
*/

function RenderShelves(props) {
  const propTypes = { 
	  books: PropTypes.arrayOf(PropTypes.object).isRequired,
	  onChangeShelf: PropTypes.func.isRequired,
	  shelf: PropTypes.object.isRequired,
	  shelves: PropTypes.arrayOf(PropTypes.object).isRequired   
	};

	let allShelves, shelves;

	shelves = [
		{id: 'currentlyReading', heading: 'Currently Reading'},
		{id: 'wantToRead', heading: 'Want to Read'},
		{id: 'read', heading: 'Already Read'}
	];

	allShelves = shelves.map((shelf) => (
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

export default RenderShelves


