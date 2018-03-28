import React, { Component } from 'react'

class ChangeBookShelf extends Component {

	let book = this.props.book;

	render () {
		return (
	      <div className="book-shelf-changer">
	        <select value={this.props.value} onChange={this.moveToShelf}>
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
