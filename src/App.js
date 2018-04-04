import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [{name: 'test'}], value: 'none' };
  }

  getBooks = () => {
      BooksAPI.getAll().then(books => this.setState({ books })); 
  }

  componentDidMount() {
    this.getBooks();
  }

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
          value={this.state.value}
        />
      )}
      />

      <Route path='/search' render={() => (
        <SearchAllBooks
          books={this.state.books}
          moveToShelf={this.moveToShelf}
          value={this.state.value}
        />
      )}
      />

    </div>
    )
  }

}

export default App
