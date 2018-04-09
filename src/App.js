import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import * as FilterBooks from './FilterBooks'
import * as ManageBooks from './ManageBooks'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [ {name: 'test title'} ],
      searchResults: []
    }
  }


  getBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books })); 
  }

  searchForBooks = (searchEvent) => {
    let query = searchEvent.target.value.trim();
    BooksAPI.search(query)
      .then(books => 
        this.setState({ searchResults: ManageBooks.updateResults(books, this.state.books) })
      ).catch(err => this.setState({ searchResults: [] }));
  }

  updateBooks = (selectedBook, shelfEvent) => {
    const filter = FilterBooks.setFilter();
    const selectedShelf = shelfEvent.target.value;
    const theseBooks = (filter === 'shelf') ? this.state.books : this.state.searchResults;
    const updatedBooks = ManageBooks.changeShelf(theseBooks, selectedBook, selectedShelf);
    this.setState({ books: updatedBooks });
    BooksAPI.update(selectedBook, selectedShelf);
  }

  clearSearch = function() {
    if (location.pathname === '/') {
      this.setState({ searchResults: [] });
      this.getBooks();
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate() {
    this.props.history.listen(pathname => {
      this.clearSearch();
    })
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
