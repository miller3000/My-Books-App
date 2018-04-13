/**
* My Books React-DOM
* SETBOOKSHELF.JS
* PARENT: RenderBook.js
* CHILDREN: None
* REACT COMPONENT TREE:
*
*           Index
*            |
*           App
* |----------|---------|
* ListMyBooks          SearchAllBooks
* RenderShelves        |
* |----------|---------|
*         RenderGrid
*            |
*         RenderBook
*            |
*         SetBookShelf
*/

import React from 'react'
import PropTypes from 'prop-types'

/**
* Drop-down menu that allows user to select a "shelf" value for any
* particular book object. Passes new props back up to state.
* @prop {object} book                       Passed in from parents
* @prop {string} defaultShelf               Passed in from parents
*   Determines what shelf is checked when menu is rendered.
*   Checked shelf will change from within "books" if user selects a
*   new shelf.
* @prop {onChange function} onChangeShelf   Passed in from parents
*   Changes shelf of selected book and updates "books" in state.
*   Triggered by drop-down event in "select"/"option" tags.
* @return JSX only
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

SetBookShelf.propTypes = {
  book: PropTypes.object,
  defaultShelf: PropTypes.string,
  onChangeShelf: PropTypes.func
};

export default SetBookShelf
