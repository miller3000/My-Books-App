import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import * as FilterBooks from './FilterBooks'
import * as ManageBooks from './ManageBooks'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import './App.css'

/**
* @description Represents a book
* @constructor
* @param {string} title - The title of the book
* @param {string} author - The author of the book
*
* APP SUMMARY:
* Allows user to search books (objects) from an outside server and add them to (or remove from) a personal library of three displayed "shelves": Currently Reading, Want to Read, and Already Read. Page displays cover, title, and author of each book. User adds to shelves via drop-down function on each book.
*
* PARENT: index.js
* CHILDREN: ListMyBooks.js ("/"), SearchAllBooks.js ("/search")
* 
* TECHNOLOGY USED:
* - React
* - React-Router-DOM
* - Javascript (ES6)
* - Fetch API
* - History API
* - History from Router
* - CSS (App.css)
* - HTML (index.html) & Favicon 
* 
* RENDERS/NAVIGATION:
* "/" - Index. Lists page title and three shelves with headings.
* "/search" - Search. Provides search bar and grid of any books that match query in the search bar.

* STATE (VARIABLES):
* - books: ARRAY OF BOOK OBJECTS: My Books library (all books assigned to shelves within My Books).
* - searchResults: ARRAY OF BOOK OBJECTS: All books (up to 20) retrieved from API that match current query.
* 
* BOOK OBJECTS WITHIN ARRAYS IN STATE:
* Long list of properties within each object. The only object properties used within My Books App are:
* - title <string>
* - authors <array of one or more strings (names)>
* - imageLinks <array of one or more strings (URLs)>
* - shelf <string> -- may or may not be assigned within a particular book object
* 
* FUNCTIONS WITHIN APP THAT SET STATE:
* - getBooks: Retrieves My Books via API and sets local state for "books". Triggered at ComponentDidMount and (if index page) ComponentDidUpdate.
* - searchForBooks: Retrieves books that match query, via API, and sets local state for "searchResults". Triggered by search bar event in SearchAllBooks component.
* - updateBooks: Changes shelf of selected book, updates local state and API. Triggered by drop-down event in SetBookShelf component.
* - clearSearch: Clears searchResults and refreshes My Books state from API. Triggered by navigating from search page to index/shelves page.
* 
* IMPORTED FUNCTIONS:
* BooksAPI: Provided by Udacity to get, update, and search books on outside server. Includes:
*   get
*   getAll
*   update
*   search
* FilterBooks: Returns subset of books to render or modify, according to shelf or query criteria. Includes:
*   setFilter
*   getResults
* ManageBooks: Returns updated arrays for books or searchResults based on user action. Includes:
*   changeShelf
*   updateResults
*
* REACT COMPONENT TREE:
*
*           Index.js
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
*
* The "App" Component Class holds and manages all state for the App.
* 
*/

//PARENT COMPONENT
class App extends Component {

//PROP TYPES
// const propTypes = {
//   books: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onChangeShelf: PropTypes.func.isRequired,
//   onEnterQuery: PropTypes.func.isRequired,
//   searchResults: PropTypes.arrayOf(PropTypes.object).isRequired
//
//   clearResults: PropTypes.func.isRequired,
//   getBooks: PropTypes.func.isRequired,
//   filter: PropTypes.oneOf(['query', 'shelf']).isRequired,
//   query: PropTypes.string.isRequired,
//   selectedShelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read'),
//   theseBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
//   updatedBooks: PropTypes.arrayOf(PropTypes.object).isRequired
// };

// const defaultProps = {
//   text: 'Hello World',
// };

//INITIAL STATE: TWO PARAMS
  state = {
      books: [ {} ],
      searchResults: []
  }

//LIFECYCLE HOOKS
  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate() {
    this.props.history.listen(pathname => {this.clearResults()});
  }

//FUNCTIONS: NAVIGATION EVENTS - SET STATE
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

//FUNCTIONS: CLICK EVENTS - SET STATE
//UPDATEBOOKS
  onChangeShelf = (selectedBook, shelfEvent) => {
    const filter = FilterBooks.setFilter();
    const selectedShelf = shelfEvent.target.value;
    const theseBooks = (filter === 'shelf') ? this.state.books : this.state.searchResults;
    const updatedBooks = ManageBooks.changeShelf(theseBooks, selectedBook, selectedShelf);
    this.setState({books: updatedBooks});
    BooksAPI.update(selectedBook, selectedShelf);
  }

//SEARCHFORBOOKS
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

//RENDER
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
