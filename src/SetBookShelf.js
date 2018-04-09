import React from 'react'

/**
 * SUMMARY: Menu function that allows user to select a "shelf" value for any particular book object - MODIFIES STATE.
 * PARENT: RenderBook.js
 * CHILD: None
 * MORE INFO: App.js
 * 
 * PROPS PASSED IN FROM PARENTS:
 * - book object
 * - defaultShelf string
 * - updateBooks function
 */

function SetBookShelf (props) {
	return (
      <div className="book-shelf-changer">
        <select
        	value={props.defaultShelf}
        	onChange={(event) => props.onChangeShelf(props.book, event)}
        >
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
