import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import './App.css'

//search results are not filtering as more letters are typed into the screen
//if query does not/cannot match a search term, no books should be displayed
//
//fix default choice in drop-down; if it's none, you can't select none; etc.
//
//should immediately re-render when property changes- componentDidUpdate(); - make it quicker using LOCAL state
//
//(selectedshelf doesn't do anything - always stuck at none :p) - replaced newshelf w/ selectedshelf?
//)
//if rendered, shelf should equal selectedshelf... seems to be working?
//if searched, should be able to add shelf property to selectedshelf... seems to be working?
//displayed shelf and state shelf are not aligned... do i need selectedshelf at all?
//
//
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [{name: 'test title'}], selectedShelf: 'default' };
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

//  setDropDown = (book, selectedShelf) => {
//
// }

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
