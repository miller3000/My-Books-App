import * as ShelfFunc from './ShelfFunc'

const currentShelf = function(book, shelf) {
	return book.shelf === shelf.id;
}

const filterShelves = function(books, shelf) {
	let shelfMatches = books.filter((book) => currentShelf(book, shelf));
	return shelfMatches;
}

export const getResults = function(books, searchResults, shelf) {
	const dummyBook = {
		authors: [],
		id: '',
		imageLinks: '',
		title: 'No books found'
	};

	let filter = ShelfFunc.setFilter();

	if (filter === 'query') {
		if (!searchResults) { return [ dummyBook ] }
			else {
				console.log(searchResults);
				return searchResults
			}
	}
	if (filter === 'shelf' && shelf) {
		return filterShelves(books, shelf);
	}
}


