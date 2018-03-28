import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import './App.css'

class BooksApp extends Component {

  let books = *.getAll();

  state = { books }

  const moveToShelf = function(event) {
    *.update(this.book, event.target.value);
    updatedBooks = *.getAll();
    this.setState({ books: updatedBooks });
  }

  render() {
    return (
    <div className="app">

      <Route exact path='/' render={() => (
        <ListMyBooks
          books:{this.state.books}
          moveToShelf:{this.moveToShelf}
        />
      )}
      />

      <Route path='/search' render={() => (
        <SearchAllBooks
          books:{this.state.books}
          moveToShelf:{this.moveToShelf}
        />
      )}
      />

    </div>
    )
  }
}

export default BooksApp
