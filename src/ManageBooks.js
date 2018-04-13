//My Books App
//FOUR UPDATE BOOKS FUNCTIONS
/**
 * 1. selectBook:
 * Finds book selected by user within books or searchResults array,
 * according to array index.
 * @param  {array of objects} books    set of books in library or
 *                                     in searchResults
 * @param  {object}          selected  book clicked by user
 * @return {number}                    index of book within given array
 *
 * 2. updateOldBook:
 * Copies existing book object selected by user, and replaces its
 * "shelf" property with new selected shelf
 * @param  {array of objects} books   set of books in library or
 *                                    in searchResults
 * @param  {number}          bookIdx  index of selected book object
 *                                    in array
 * @param  {string}           shelf   new value for book object
 * @return {object}                   revised copy of book object
 *
 * 3. replaceBook:
 * Takes existing book and creates new book with changed shelf, and
 * replaces that book back into the input array of books
 * @param  {array of objects} books   set of books in library or
 *                                    in searchResults
 * @param  {number}          bookIdx  index of selected book object
 *                                    in array
 * @param  {string}           shelf   new value for book object
 * @return {array of objects}         revised copy of books array
 *
 * 4. changeShelf:
 * Inputs book and shelf selected by user and outputs a new
 * array of "books" to be set in state.
 * @param  {array of objects} books    set of books in library or
 *                                     in searchResults
 * @param  {object}           selected book clicked by user
 * @param  {string}           shelf    new value for book object
 * @return {array of objects}          revised copy of books array
 *
 *
 //TWO COMPILE SEARCH RESULTS FUNCTIONS
/**
 * 5. mergeResults:
 * For each book in user library, look for it within the query search
 * results. If found, update the book in new searchResults state to
 * have the same shelf value as the current library (books) state.
 * @param  {array of objects} results  current searchResults state
 * @param  {array of objects} myBooks  current books state
 * @return {array of objects}          new copy of searchResults to
 *                                     update state
 * 6. updateResults:
 * Input any searchResults are currently in state, make a copy of that
 * array of objects (which does not reflect current shelf values), and
 * merge it with current library (books) state (which does reflect
 * current shelf values). Then return the new copy of searchResults
 * for rendering with correct shelf values for any results also found
 * in library.
 * @param  {array of objects} results  current searchResults state
 * @param  {array of objects} myBooks  current books state
 * @return {array of objects}          new copy of searchResults to
 *                                     update state
 */


const selectBook = function(books, selected) {
  return books.findIndex(book => book.id === selected.id);
}

const updateOldBook = function(books, bookIdx, shelf) {
  const oldBook = books[bookIdx];
  const newShelf = {shelf: shelf}
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
const mergeResults = function(results, myBooks) {
  for (let i = 0; i < myBooks.length; i++) {
    let idx = selectBook(results, myBooks[i]);
    if (idx !== -1) {
      results[idx] = updateOldBook(results, idx, myBooks[i].shelf);
    }
  }
  return results;
}
export const updateResults = function(results, myBooks) {
  if (!results) {
    return []
  } else {
    const newResults = results.slice();
    return mergeResults(newResults, myBooks);
  }
}

