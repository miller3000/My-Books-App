import React, { Component } from 'react'

class SetBookShelf extends Component {

	render () {
		return (
	      <div className="book-shelf-changer">
	        <select value={this.props.defaultShelf} onChange={(event) => this.props.updateBooks(this.props.book, event)}>
	          <option value="default">Move to...</option>
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
