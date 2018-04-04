import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [{name: 'test title'}], selectedShelf: 'none' };
  }

  getBooks = () => {
      BooksAPI.getAll().then(books => this.setState({ books })); 
  }

  componentDidMount() {
    this.getBooks();
  }

//why not setState selectedShelf?
//
  moveToShelf = (book, event) => {
    let newShelf = event.target.value;
    BooksAPI.update(book, newShelf).then(this.getBooks());
  }

  render() {
    return (
    <div className="app" key="books-app">

      <Route exact path='/' render={() => (
        <ListMyBooks
          books={this.state.books}
          moveToShelf={this.moveToShelf}
          selectedShelf={this.state.selectedShelf}
        />
      )}
      />

      <Route path='/search' render={() => (
        <SearchAllBooks
          books={this.state.books}
          moveToShelf={this.moveToShelf}
          selectedShelf={this.state.selectedShelf}
        />
      )}
      />

    </div>
    )
  }

}

export default App
