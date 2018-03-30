import React from 'react'
import FilterBooks from './FilterBooks'

function RenderShelves(props) {

	let allShelves, filterFunc, shelves;

	filterFunc = 'shelf';

	shelves = [
		{id: 'currentlyReading', heading: 'Currently Reading'},
		{id: 'wantToRead', heading: 'Want to Read'},
		{id: 'read', heading: 'Already Read'}
	];

	allShelves = shelves.map((shelf) => (
	    <div className="bookshelf" key={shelf.id}>
		    <h2 className="bookshelf-title">{shelf.heading}</h2>
			    <div className="bookshelf-books">
				  <FilterBooks
				  	books={props.books}
				    filterFunc={filterFunc}
			        moveToShelf={props.moveToShelf}
			        shelf={shelf}
			        shelves={shelves}
				  />
				</div>
		</div>
		))

	return (<div>{allShelves}</div>)
}


export default RenderShelves


