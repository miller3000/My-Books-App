import React from 'react'
import { Link } from 'react-router-dom'
import RenderShelf from './RenderShelf'


function ListMyBooks(props) {

	const shelves = [
		{ name: 'currentlyReading', key: 'current' },
	 	{ name: 'wantToRead', key: 'want' },
	 	{ name: 'alreadyRead', key: 'read' }
	// 	{ name: 'none', key: 'none'}
	];

	return (
		<div className="list-books">
			<div className="list-books-title">
			  <h1>MyReads</h1>
			</div>
			<div className="list-books-content">
			  <div>
			  	{shelves.map((shelf) => (		
				  <RenderShelf
				  	books={props.books}
			        moveToShelf={props.moveToShelf}
				    shelf={props.shelf}
				  />
				))}
			  </div>
			</div>
	        <div className="open-search">
	          <Link to="/search">Add a book</Link>
	        </div>
		</div>
	)
}

export default ListMyBooks
