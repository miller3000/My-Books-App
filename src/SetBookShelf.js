/**
* My Books
* 
* @react-DOM
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
* @prop book
*   {object with several properties}
*   [props passed in from parents;
*   describes a particular book]
* @prop defaultShelf
*   {string}
*   [prop passed in from parents;
*   determines what shelf is pre-selected upon rendering of menu,
*   but shelf will change from within "books" state if a new shelf
*   is selected in this function]
* @prop onChangeShelf
*   {event-handler function}
*   [prop passed in from parents;
*   Changes shelf of selected book;
*   Updates "books" in local state and API.
*   Triggered by drop-down event in "select"/"option" tags]
* @description
* Menu function that allows user to select a "shelf" value
* for any particular book object. Passes new props back up to state.
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
  book: PropTypes.object.isRequired,
  defaultShelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default SetBookShelf
