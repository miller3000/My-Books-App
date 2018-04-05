import React from 'react'
import RenderGrid from './RenderGrid'

function RenderShelves(props) {

	let allShelves, shelves;

	shelves = [
		{id: 'currentlyReading', heading: 'Currently Reading'},
		{id: 'wantToRead', heading: 'Want to Read'},
		{id: 'read', heading: 'Already Read'}
	];

	allShelves = shelves.map((shelf) => (
	    <div className="bookshelf" key={shelf.id}>
		    <h2 className="bookshelf-title">{shelf.heading}</h2>
			    <div className="bookshelf-books">
				  <RenderGrid
				  	books={props.books}
					updateBooks={props.updateBooks}
			        shelf={shelf}
			        shelves={shelves}
				  />
				</div>
		</div>
		))

	return (<div>{allShelves}</div>)
}


export default RenderShelves


