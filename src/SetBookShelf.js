import React from 'react'

function SetBookShelf (props) {
	return (
      <div className="book-shelf-changer">
        <select value={props.defaultShelf} onChange={(event) => props.updateBooks(props.book, event)}>
          <option value="default" disabled>Move book to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Already Read</option>
          <option value="none">None</option>
        </select>
      </div>
	)
}

export default SetBookShelf
