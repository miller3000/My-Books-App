const setBook = function(books, selected) {
  return books.findIndex(book => book.id === selected.id);
}

const setNewBook = function(books, bookIdx, shelf) {
  let oldBook = books[bookIdx];
  let newShelf = { shelf: shelf }
  let newBook = Object.assign(oldBook, newShelf);
  let newBooks = books;
  newBooks[bookIdx] = newBook;
  return newBooks;
}

export const changeShelf = function(books, selected, shelf) {
  let idx = setBook(books, selected);
  return setNewBook(books, idx, shelf);
}

export const setFilter = function(){
  return (location.pathname === '/search') ? 'query' : 'shelf';
}

