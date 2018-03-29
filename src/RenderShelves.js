import React from 'react'
import FilterBooks from './FilterBooks'

function RenderShelves(props) {

	const shelves = [
		{ name: 'currentlyReading', key: 'current' },
	 	{ name: 'wantToRead', key: 'want' },
	 	{ name: 'alreadyRead', key: 'read' }
	]

	let filterFunc = 'shelf';

	let mapShelves = function(){
		shelves.map((shelf) => (		
		  <div className="bookshelf" key={shelf.key}>
		    <h2 className="bookshelf-title">{shelf.name}</h2>
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
	}

	return (<div>{mapShelves}</div>)
}



//		  <div className="bookshelf" key={shelf.key}>
//		    <h2 className="bookshelf-title">{shelf.name}</h2>
//		    <div className="bookshelf-books">
//		      <FilterBooks
//		      	books={props.books}
//		        moveToShelf={props.moveToShelf}
//		      	shelf={shelf}
//		      	filterFunc={booksOnShelf}
//		      />
//		    </div>
//		  </div>
//	)
//}

export default RenderShelves


