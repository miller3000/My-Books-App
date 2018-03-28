import React from 'react'
import { Link } from 'react-router-dom'
import DisplayShelf from './DisplayShelf'

const shelves = [
	{ name: 'currentlyReading', key: 1 },
 	{ name: 'wantToRead', key: 2 },
 	{ name: 'alreadyRead', key: 3 }
// 	{ name: 'none', key: 4}
];


function ListMyBooks(props) {
	return (
		<div className="list-books">
			<div className="list-books-title">
			  <h1>MyReads</h1>
			</div>
			<div className="list-books-content">
			  <div>
			  	{props.shelves.map((shelf) => (		
				  <DisplayShelf
				  	books={props.books}
			        moveToShelf:{this.moveToShelf}
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
