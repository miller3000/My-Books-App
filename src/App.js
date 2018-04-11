/**
* My Books
* 
* @react-DOM
* APP.JS
* PARENT: index.js
* CHILDREN: ListMyBooks.js ("/"), SearchAllBooks.js ("/search")
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

/**
* @description
* App allows user to search books (objects) from an outside server and
* add them to (or remove from) a personal library of three displayed
* "shelves": Currently Reading, Want to Read, and Already Read.
* App displays cover, title, and author of each book on shelf
* or in search.
* User adds books to shelves via drop-down input on each book cover.
*/

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'

/**
* {component: "/"}
* Renders index page. Lists page title and three shelves with headings.
*/
import ListMyBooks from './ListMyBooks'

/**
* {component: "/search"}
* Renders search bar and grid of any books that match search query.
*/
import SearchAllBooks from './SearchAllBooks'

/**
* {module: fetch API}
* Provided by Udacity to get, update, and search books on server.
* Includes:
*  - get (not used in app)
*  - getAll
*  - update
*  - search
*/
import * as BooksAPI from './BooksAPI'

/**
* {module: logic}
* Returns subset of books to render or modify, according to
* "shelf" or "query" criteria. 
* Includes:
*  - setFilter
*  - getResults
*/
import * as FilterBooks from './FilterBooks'

/**
* {module: logic}
* Returns updated arrays for "books" or "searchResults" based on
* user action.
* Includes:
*  - changeShelf
*  - updateResults
*/
import * as ManageBooks from './ManageBooks'

//STATE - PROPTYPES
/**
* @state books
*   {state variable - array of book objects} 
*   Contains all (and only) books assigned to user shelves within app.
*   Array is managed within app state.
*   All book objects in API include a larger set of properties, but
*   this app only uses:
*  - title <string>
*  - authors <array of one or more strings (names)>
*  - imageLinks <array of one or more strings (URLs)>
*  - shelf <string> -- may or may not have a value within a particular
*    book
*    
* @method onChangeShelf
*   {user-event handler function - state management} 
*   Listens for user selection of new shelf value for a book object.
*   Depending on filter, rerenders index (shelves) or search (results)
*   page with new shelf value, and updates state and server.
*   Changes shelf of selected book.
*   Updates "books" in local state and API.
*   Triggered by drop-down event in SetBookShelf component
*   @param  {object} selectedBook  book selected by user in
*                                  <SetBookShelf>
*   @param  {event}   shelfEvent   onChange event
*                                  (user selects new shelf)
*   @return {array of objects}     sets state of "books" and updates
*                                  server with new shelf value
*   
* @method onEnterQuery
*   {user-event handler function - state management} 
*   Listens for user entry of text into search bar, sets as query for
*   search of all books.
*   Sends get request to server for books that match current query,
*   from set of all books available to app (whether or not book is on
*   a user shelf.
*   Sets server response to a local state for "searchResults".
*   Rerenders / resets state each time user types.
*   If searchResults is empty, no books are rendered.
*   Triggered by search bar event in SearchAllBooks component.
*   @param  {event}           searchEvent onChange event
*                                         (user enters text)
*   @return {array of objects}            any book objects on server
*                                         that match query term
*   
* @state searchResults
*   {state variable - array of book objects}
*   Contains all books (up to 20) last retrieved from API,
*   which match current query entered into search bar.
*   Similar to "books" object above.
*
//PARAMETERS - LOCAL
/**
* @function clearResults
*   {navigation-event function - state management}
*   Sets "searchResults" state to empty array and sets "books" state
*   by refreshing library from server.
*   Triggered by navigating from '/search' page to '/' (shelves) page.
*   @return {array of objects} books currently in user library
*   
* @function getBooks
*   {navigation-event function - state management}
*   Retrieves My Books library from server.
*   Sets local state for "books".
*   Triggered upon ComponentDidMount and (if '/') ComponentDidUpdate.
*   @return {array of objects} books currently in user library
*   
* @const filter
*   {string - internal variable - either 'query' or 'shelf'}
*   Sets whether "books" or "searchResults" are rendered.
*   
* @prop query
*   {string - user input}
*   Is text entered by user that filters books that are fetched
*   from API and displayed on "/search".
*   
* @prop selectedShelf
*   {string - user input}
*   Is value set by user upon selecting option in drop-down menu.
*   Used to reassign value of "shelf" property of a book object.
*   
* @const theseBooks
*   {array of book objects - internal variable}
*   Represents either "books" or "searchResults" as input within
*   app logic.
*   
* @const updatedBooks
*   {array of book objects - internal variable}
*   Is copy of "books" array with updated shelf values, to be output
*   into setState.
*/

// The "App" Component Class holds and manages all state for the App.



class App extends Component {
  const propTypes = {   
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onEnterQuery: PropTypes.func.isRequired,
    searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
      books: [ {} ],
      searchResults: []
  }

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate() {
    this.props.history.listen(pathname => {this.clearResults()});
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => this.setState({books})); 
  }

  clearResults = () => {
    if (location.pathname === '/') {
      this.setState(
        {searchResults: []}
      );
      this.getBooks();
    }
  }

  onChangeShelf = (selectedBook, shelfEvent) => {
    const filter = FilterBooks.setFilter();
    const selectedShelf = shelfEvent.target.value;
    const theseBooks = (filter === 'shelf') ? this.state.books : this.state.searchResults;
    const updatedBooks = ManageBooks.changeShelf(theseBooks, selectedBook, selectedShelf);
    this.setState({books: updatedBooks});
    BooksAPI.update(selectedBook, selectedShelf);
  }

  onEnterQuery = (searchEvent) => {
    let query = searchEvent.target.value.trim();
    BooksAPI.search(query)
      .then(books => this.setState(
          {searchResults: ManageBooks.updateResults(books, this.state.books)}
        ))
      .catch(err => this.setState(
          {searchResults: []}
        ));
  }

  render() {
    return (
    <div className="app" key="books-app">
      <Route exact path='/' render={() => (
        <ListMyBooks
          books={this.state.books}
          onChangeShelf={this.onChangeShelf}
        />
      )}
      />
      <Route path='/search' render={() => (
        <SearchAllBooks
          books={this.state.books}
          onChangeShelf={this.onChangeShelf}
          onEnterQuery={this.onEnterQuery}
          searchResults={this.state.searchResults}
        />
      )}
      />
    </div>
    )
  }
}

export default App
