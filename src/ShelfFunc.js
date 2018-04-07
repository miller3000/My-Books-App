//import * as BooksAPI from './BooksAPI'

//FILTER FUNCTION
export const setFilter = function(){
  return (location.pathname === '/search') ? 'query' : 'shelf';
}


//FOUR UPDATE BOOKS FUNCTIONS
const selectBook = function(books, selected) {
  console.log(books);
  console.log(selected);
  return books.findIndex(book => book.id === selected.id);
}

const updateOldBook = function(books, bookIdx, shelf) {
  let oldBook = books[bookIdx];
  let newShelf = { shelf: shelf }
  return Object.assign(oldBook, newShelf);
}

const replaceBook = function(books, bookIdx, shelf) {
  let newBook = updateOldBook(books, bookIdx, shelf);
  let newBooks = books;
  newBooks[bookIdx] = newBook;
  return newBooks;
}

export const changeShelf = function(books, selected, shelf) {
  let idx = selectBook(books, selected);
  return replaceBook(books, idx, shelf);
}


//TWO COMPILE SEARCH RESULTS FUNCTIONS
const mergeResults = (results, myBooks) => {
  for (let i = 0; i < myBooks.length; i++) {
    let idx = selectBook(results, myBooks[i]);
    if (idx !== -1) {
      results[idx] = updateOldBook(results, idx, myBooks[i].shelf);
    }
  }
  return results;
}

export const updateResults = (results, myBooks) => {
  if (results) {
    let newResults = results.slice();
    return mergeResults(newResults, myBooks);
  }
}



/*
(1) SEARCH LOADS WITH NO SHELVES FROM EXISTING LIBRARY
(2) SHELF RERENDERS WITH ONLY SEARCH BOOK

displayedBooks
  for (var i = 0; i < data.length; i++) {
    if (array1[i].month == data[i].month) { //work until month 4
        array1[i].count = data[i].count 

forEach(results.map())

books = this.state.books;
searchResults = this.state.searchResults;
for (book in searchResults)
if (book in books)
  searchResults.book.shelf == book.shelf
)

const setBook = function(selected, shelf) {
  BooksAPI.get(selected.id)
  .then(book => book.shelf = shelf)
//  .then(book => BooksAPI.update(book, shelf))
}

this.setState(searchResults = ShelfFunc.getResults(myBooks))


 */