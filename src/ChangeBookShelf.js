import React, { Component } from 'react'

class ChangeBookShelf extends Component {
	const book = this.props.book;

	const changeShelf = function(event) {
		this.props.onShelfChange(event.target.value)
	}

	render () {
		return (
	      <div className="book-shelf-changer">
	        <select value={book.shelf} onChange={this.changeShelf}>
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
