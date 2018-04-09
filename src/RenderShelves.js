import React from 'react'
import RenderGrid from './RenderGrid'

/**
 * SUMMARY: Renders shelves within index (JSX) page. Maps each of three shelves to a separate grid of books.
 * PARENT: ListMyBooks.js
 * CHILD: RenderGrid.js
 * MORE INFO: App.js
 * 
 * @param {array of "shelf" objects} shelves [organizes book objects according to three categories]
 * @param {map function} allShelves [maps shelves array to JSX code]
 *
 * Passed-through props:
 * - books {array of "book" objects}
 * - updateBooks {onChange function}
 * 
 */

function RenderShelves(props) {
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


