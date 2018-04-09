const currentShelf = function(book, shelf) {
  return book.shelf === shelf.id;
}

const filterShelves = function(books, shelf) {
  return books.filter((book) => currentShelf(book, shelf));
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


