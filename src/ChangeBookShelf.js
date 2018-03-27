import React, { Component } from 'react'

class ChangeBookShelf extends Component {
	const {book, moveToShelf} = this.props;

	render () {
		return (
	      <div className="book-shelf-changer">
	        <select value={book.shelf} onChange={moveToShelf(book)}>
	          <option value="none" disabled>Move to...</option>
	          <option value="currentlyReading">Currently Reading</option>
	          <option value="wantToRead">Want to Read</option>
	          <option value="alreadyRead">Already Read</option>
	          <option value="none">None</option>
	        </select>
	      </div>
		)
	}  
}

export default ChangeBookShelf
