import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import * as ShelfFunc from './ShelfFunc'
import './App.css'

//search results are not filtering as more letters are typed into the screen
//if query does not/cannot match a search term, no books should be displayed
//
//should immediately re-render when property changes- componentDidUpdate(); - make it quicker using LOCAL state
//
//if rendered, shelf should equal selectedshelf... seems to be working?
//if searched, should be able to add shelf property to selectedshelf... seems to be working?
//displayed shelf and state shelf are not aligned... do i need selectedshelf at all?
//
//



//  setShelf = (event) => {
//    this.setState({ newShelf: event.target.value });
//  }

//  setBook = (bookSearch) => {
//    bookIdx = this.state.books.findIndex(book => book.id === bookSearch.id);
//    this.setState({ books[bookIdx].shelf === this.state.newShelf });
//  }

//  updateBook = (book, event) => {
//    if (book.shelf !== event.target.value) {
//      this.setShelf(event).then(this.setBook(book));
//    }
//  }

//let updatedBooks = this.state.books;
//updatedBooks[bookIdx].

//    this.setState(prevState => ({

//      this.state.books[bookIdx].shelf === event.target.value,

//  changeShelf = (bookIdx, event) => {
//    this.setState({
//      books: newBooks,
//      update: { book: books[bookIdx], shelf: event.target.value }
//    });
//  }

//  updateBook = (book, event) => {
//    this.setBook(book)
//    .then(idx => changeShelf(idx, event))
//  }


//  moveToShelf = (book, event) => {
//    let newShelf = event.target.value;
//    BooksAPI.update(book, newShelf).then(this.getBooks());
//  }


// if path is /
//   filter: shelfFunc
// if path is /search
//   filter: searchFunc

  // state = { query: '', searchResults: [] };

  // updateQuery = (newQuery) => {
  //  this.setState({ query: newQuery.trim() })
  // }

  // searchAPI = (query, searchResults) => {
  //  BooksAPI.search(query).then(books => this.setState({ searchResults: books }));
  // }

  // getBooks = (query, searchResults, event) => {
  //  this.updateQuery(event.target.value);
  //  this.searchAPI(this.state.query, this.state.searchResults);
  //  console.log(this.state.query);
  //  console.log(this.state.searchResults);
  // }

  // filterFunc = 'query';
  // 
  // 
  // 
  // SHOULDCOMPONENTUPDATE - SEARCHBOOKS VS UPDATEBOOKS ???


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [ {name: 'test title'} ],
      searchResults: [],
      query: '',
      update: {
        book: {},
        shelf: '',
      }
    }
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books })); 
  }

  componentDidMount() {
    this.getBooks();
  }

  searchBooks = (searchEvent) => {
    let query = searchEvent.target.value.trim();
    this.setState({ query: query });
    BooksAPI.search(this.state.query)
    .then(books => this.setState({ searchResults: books }));
  }

  updateBooks = (book, shelfEvent) => {
    let filter = ShelfFunc.setFilter();
    let selectedBook = book;
    let shelf = shelfEvent.target.value;
    let theseBooks = (filter === 'shelf') ? this.state.books : this.state.searchResults;
    let newBooks = ShelfFunc.changeShelf(theseBooks, selectedBook, shelf);
    this.setState({
      books: newBooks,
      update: {book: book, shelf: shelf}
    });
  }

  componentDidUpdate() {
    BooksAPI.update(this.state.update.book, this.state.update.shelf);
  }


  render() {
    return (
    <div className="app" key="books-app">

      <Route exact path='/' render={() => (
        <ListMyBooks
          books={this.state.books}
          updateBooks={this.updateBooks}
        />
      )}
      />

      <Route path='/search' render={() => (
        <SearchAllBooks
          books={this.state.books}
          query={this.state.query}
          searchBooks={this.searchBooks}
          searchResults={this.state.searchResults}
          updateBooks={this.updateBooks}
        />
      )}
      />

    </div>
    )
  }

}

export default App
