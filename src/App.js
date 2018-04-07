import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import * as Heart from './MyBooksFunc'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [ {name: 'test title'} ],
      searchResults: [],
      query: '',
      toUpdate: {
        book: {},
        shelf: '',
      }
    }
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books })); 
  }

//  updateSearch = function(results) {
//    return ShelfFunc.updateResults(results, this.state.books);
//  }
//        this.setState({ searchResults: this.updateSearch(books) }));

  searchForBooks = (searchEvent) => {
    let query = searchEvent.target.value.trim();
    this.setState({ query: query });
    BooksAPI.search(this.state.query)
      .then(books =>
        this.setState({ searchResults: Heart.updateResults(books, this.state.books)})
      )
  }

  updateBooks = (selectedBook, shelfEvent) => {
    let filter = Heart.setFilter();
    let selectedShelf = shelfEvent.target.value;
    let theseBooks = (filter === 'shelf') ? this.state.books : this.state.searchResults;
    let updatedBooks = Heart.changeShelf(theseBooks, selectedBook, selectedShelf);
    this.setState({
      books: updatedBooks,
      toUpdate: {book: selectedBook, shelf: selectedShelf}
    });
  }

  updateAPI = () => {
    if (this.state.toUpdate.shelf) {
      BooksAPI.update(this.state.toUpdate.book, this.state.toUpdate.shelf);
      this.setState({ toUpdate: { book: {}, shelf: '' }});
    }  
  }

  updateDisplay = function(props, prevProps, prevState) {
//    if (this.props.history.location !== this.prevProps.history.location) {
    console.log('updateDisplay');
    this.props.history.location.pathname === '/search' ? this.updateSearch() : this.getBooks();
//     }
   }

  componentDidMount() {
    this.getBooks();
  }
  
  shouldComponentUpdate(props, nextProps, nextState) {
    return this.state.toUpdate !== nextState.toUpdate
//      || this.props.history.listen(this.props.history.location.pathname)
  //    || this.props.location !== nextProps.location;
  }

  componentDidUpdate(props, prevProps, prevState) {
//    console.log(this.props.history.location.pathname);
    this.props.history.listen(pathname =>
      this.updateDisplay(props, prevProps, prevState));
    this.updateAPI(prevState);
//    this.updateAPI(prevState);
//    this.updateDisplay(location, prevProps);
//    .then(this.updateDisplay(location, prevProps));
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
          searchForBooks={this.searchForBooks}
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
