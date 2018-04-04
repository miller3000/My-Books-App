import React, { Component } from 'react'

class SetBookShelf extends Component {

	render () {
		return (
	      <div className="book-shelf-changer">
	        <select value={this.props.selectedShelf} onChange={(event) => this.props.moveToShelf(this.props.book, event)}>
	          <option value="none">Move to...</option>
	          <option value="currentlyReading">Currently Reading</option>
	          <option value="wantToRead">Want to Read</option>
	          <option value="read">Already Read</option>
	          <option value="none">None</option>
	        </select>
	      </div>
		)
	}  
}

export default SetBookShelf
