//THREE FILTER BOOKS FUNCTIONS
/**
 * 1. filterShelves:
 * Matches "shelf" property of a book object
 * to the "id" property of a shelf object
 * @param  {array of objects} books   from user library,
 *                                    properties "title", shelf", etc.
 * @param  {object}           shelf   "currentlyReading",
 *                                    "AlreadyRead", "read"
 * @return {array of objects}         "books" filtered into new array
 * 
 * 2. setFilter:
 * Returns a string based on current browser location, determines
 * what books will be rendered
 *
 * 3. getResults:
 * Based on current browser location, returns either the entirety
 * of current searchResults array, or a subset of books array
 * according to matching shelf property. JSX code for the returned
 * array of book objects will be rendered by parent component.
 * @param  {array of objects} books         in state, from user library
 *                                          (ListAllBooks)
 * @param  {array of objects} searchResults in state, from API search
 *                                          (SearchAllBooks)
 * @param  {object}           shelf         one of 3 categories, from
 *                                          (RenderShelves)
 * @return {array of objects}               either "books" (filtered),
 *                                          or searchResults
 */


const filterShelves = function(books, shelf) {
  return books.filter((book) => book.shelf === shelf.id);
}

export const setFilter = function(){
  return (location.pathname === '/search') ? 'query' : 'shelf';
}

export const getResults = function(books, searchResults, shelf) {
  const filter = setFilter();
  if (filter === 'query') {
  	return searchResults;
  }
  if (filter === 'shelf' && shelf) {
	  return filterShelves(books, shelf);
  }
}


