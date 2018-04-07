import React, { Component } from 'react'
import { Route } from 'react-router-dom'
//import createHistory from "history/createBrowserHistory";
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import * as ShelfFunc from './ShelfFunc'
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

  history = this.props.history;
  location = history.location;

//  history = createHistory();
//  location = history.location;

  getBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books })); 
  }

  searchForBooks = (searchEvent) => {
    let query = searchEvent.target.value.trim();
    this.setState({ query: query });
    BooksAPI.search(this.state.query)
    .then(books => this.setState({ searchResults: books }));
  }

  updateBooks = (selectedBook, shelfEvent) => {
    let filter = ShelfFunc.setFilter();
    let selectedShelf = shelfEvent.target.value;
    let theseBooks = (filter === 'shelf') ? this.state.books : this.state.searchResults;
    let updatedBooks = ShelfFunc.changeShelf(theseBooks, selectedBook, selectedShelf);
    this.setState({
      books: updatedBooks,
      toUpdate: {book: selectedBook, shelf: selectedShelf}
    });
  }

  updateSearch = () => {
    let resultsWithShelf = ShelfFunc.updateResults(this.state.searchResults, this.state.books);
    this.setState({ searchResults: resultsWithShelf });
  }

  updateAPI = (prevState) => {
    if (this.state.toUpdate !== prevState.toUpdate) {
      console.log('function ON');
      BooksAPI.update(this.state.toUpdate.book, this.state.toUpdate.shelf);
      console.log(this.state.toUpdate);
    }  
  }

  updateDisplay = function(location, prevProps, prevState) {
    if (this.props.location !== this.prevProps.location) {
      this.props.location.pathname === '/search' ? this.updateSearch() : this.getBooks();
    }
  }

  componentDidMount() {
    this.getBooks();
  }
  
  // shouldComponentUpdate(location, nextProps, nextState) {
  //   return this.state.toUpdate !== nextState.toUpdate
  //   || this.props.location !== nextProps.location;
  // }

  componentDidUpdate(location, prevProps, prevState) {
    console.log(history);
    console.log(location.pathname);
    history.listen(location => console.log(location))
    this.updateAPI(prevState);
    this.updateDisplay(location, prevProps);
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
