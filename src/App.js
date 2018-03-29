import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books : [{name: 'test'}] };
  }

  getBooks() {
    BooksAPI.getAll().then(books => this.setState({ books }))  
  }

  componentDidMount() {
    this.getBooks();
  }

  moveToShelf(event) {
    BooksAPI.update(this.props.book, event.target.value).then(this.getBooks());
  }

  render() {
    return (
    <div className="app">

      <Route exact path='/' render={() => (
        <ListMyBooks
          books={this.state.books}
          moveToShelf={this.moveToShelf}
        />
      )}
      />

      <Route path='/search' render={() => (
        <SearchAllBooks
          books={this.state.books}
          moveToShelf={this.moveToShelf}
        />
      )}
      />

    </div>
    )
  }

}

export default App
