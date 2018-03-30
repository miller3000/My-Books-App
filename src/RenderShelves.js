import React from 'react'
import FilterBooks from './FilterBooks'

function RenderShelves(props) {

//	state = { shelf: 'none', booksDisplayed = [] }

	let allShelves, filterFunc, shelves;

	shelves = [
		{id: 'currentlyReading', heading: 'Currently Reading'},
		{id: 'wantToRead', heading: 'Want to Read'},
		{id: 'alreadyRead', heading: 'Already Read'}
	];

	filterFunc = 'shelf';

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


