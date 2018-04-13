/**
* My Books React-DOM
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

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'

//THREE LOCAL MODULES
/**
* 1. BooksAPI:
* Provided by Udacity to get, update, and search books on server.
* Includes:
*  - get (not used in app)
*  - getAll
*  - update
*  - search
*
* 2. FilterBooks:
* Returns subset of books to render or modify, according to
* "shelf" or "query" criteria. 
* Includes:
*  - setFilter
*  - getResults
*  
* 3. ManageBooks:
* * Returns updated arrays for "books" or "searchResults" based on
* user action.
* Includes:
*  - changeShelf
*  - updateResults
*/
import * as BooksAPI from './BooksAPI'
import * as FilterBooks from './FilterBooks'
import * as ManageBooks from './ManageBooks'

//TWO STATE VARIABLES
/**
* 1. books {array of book objects} 
*   Contains all books assigned to user shelves within app.
*   All book objects in API include a larger set of properties, but
*   this app only uses:
* @property {string} title
* @property {array of name strings} authors
* @property {array of URL strings} imageLinks
* @property {string} shelf
*    
* 2. searchResults {array of book objects}
*   Contains all books (up to 20) last retrieved from API,
*   which match current query entered into search bar.
*   Same properties as "books" array and book objects above.
*/
//TWO FUNCTIONS PASSED AS PROPS
/**
* 1. onChangeShelf:
*   Handles user events, manages state.
*   Listens for user selection of new shelf value for a book object.
*   Depending on filter, rerenders index (shelves) or search (results)
*   page with new shelf value, and updates state and server.
*   Triggered by drop-down event in SetBookShelf component.
* @param  {object}  selectedBook   book selected by user in
*                                  <SetBookShelf>
* @param  {event}   shelfEvent     onChange event
*                                  (user selects new shelf)
* @const  {string}  filter         either 'query' or 'shelf'
* @const  {string}  selectedShelf  selection by user in drop-down menu
* @const  {array of book objects}      theseBooks
*   Represents "books" or "searchResults" as input to changeShelf.
* @const  {array of book objects}      updatedBooks
*   Copy of "books" array with updated shelf values, output from
*   changeShelf.
* @return {array of book objects}  sets state of "books" and updates
*                                  server with new shelf value
*   
* 2. onEnterQuery:
*   Handles user events, manages state.
*   Listens for user entry of text into search bar, sets as query for
*   search of all books.
*   Sends get request to server for books that match current query.
*   Sets server response to a local state for "searchResults".
*   Rerenders / resets state each time user types.
*   If searchResults is empty, no books are rendered.
*   Triggered by search bar event in SearchAllBooks component.
* @param  {event}         searchEvent onChange event (user enters text)
* @const  {string}        query       text entered by user
* @throws {error}     If no books returned from server, sets results=[]
* @return {array of book objects}     books on server that match query
*/
//TWO LOCAL FUNCTIONS
/**
* 1. clearResults:
*   Handles navigation events, manages state.
*   Sets "searchResults" state to empty array and sets "books" state
*   by refreshing library from server.
*   Triggered by navigating from '/search' page to '/' (shelves) page.
* @return {array of objects} books currently in user library
*   
* 2. getBooks:
*   Handles navigation events, manages state.
*   Retrieves My Books library from server.
*   Sets local state for "books".
*   Triggered upon ComponentDidMount and (if '/') ComponentDidUpdate.
* @return {array of objects} books currently in user library
*/

/**
 * This component stores all state for the My Books app, stores all
 * setState functions, and renders either the shelves (index) page ("/"
 * or <ListMyBooks>) or search page ("/search" or <SearchAllBooks>).
 */
class App extends Component {
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
    const query = searchEvent.target.value.trim();
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

App.propTypes = {   
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  onEnterQuery: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App
