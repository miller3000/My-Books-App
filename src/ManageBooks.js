//FOUR UPDATE BOOKS FUNCTIONS
const selectBook = function(books, selected) {
  return books.findIndex(book => book.id === selected.id);
}

const updateOldBook = function(books, bookIdx, shelf) {
  const oldBook = books[bookIdx];
  const newShelf = { shelf: shelf }
  return Object.assign(oldBook, newShelf);
}

const replaceBook = function(books, bookIdx, shelf) {
  const newBook = updateOldBook(books, bookIdx, shelf);
  const newBooks = books;
  newBooks[bookIdx] = newBook;
  return newBooks;
}

export const changeShelf = function(books, selected, shelf) {
  const idx = selectBook(books, selected);
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
  if (!results) {
    return []
  } else {
    const newResults = results.slice();
    return mergeResults(newResults, myBooks);
  }
}

