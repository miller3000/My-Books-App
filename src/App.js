import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
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




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [ {name: 'test title'} ],
      update: {
        book: {},
        shelf: ''
      }
    }
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books })); 
  }

  componentDidMount() {
    this.getBooks();
  }

  setBook = function(selected) {
    console.log(selected.id);
    return this.state.books.findIndex(book => book.id === selected.id);
  }

  setNewBook = function(bookIdx, shelf) {
    console.log(bookIdx);
    let oldBook = this.state.books[bookIdx];
    console.log(oldBook);
    let newShelf = { shelf: shelf }
    console.log(newShelf);
    let newBook = Object.assign(oldBook, newShelf);
    console.log(newBook);
    let newBooks = this.state.books;
    newBooks[bookIdx] = newBook;
    console.log(newBooks);
    return newBooks;
  }

  changeShelf = function(selected, shelf) {
//    books = this.state.books;
//    console.log(books);
    let idx = this.setBook(selected);
    console.log(idx);
    return this.setNewBook(idx, shelf);
  }

  updateBooks = (book, event) => {
    let selected = book;
    console.log(selected);
    let shelf = event.target.value;
    console.log(shelf);
    let newBooks = this.changeShelf(selected, shelf);
    this.setState({
      books: newBooks,
      update: {book: book, shelf: shelf}
    });
  }

  componentDidUpdate() {
    console.log(this.state.update);
    BooksAPI.update(this.state.update.book, this.state.update.shelf);
  }


  render() {
    return (
    <div className="app" key="books-app">

      <Route exact path='/' render={() => (
        <ListMyBooks
          books={this.state.books}
//          moveToShelf={this.moveToShelf}
          updateBooks={this.updateBooks}
        />
      )}
      />

      <Route path='/search' render={() => (
        <SearchAllBooks
          books={this.state.books}
//          moveToShelf={this.moveToShelf}
          updateBook={this.updateBooks}
        />
      )}
      />

    </div>
    )
  }

}

export default App
