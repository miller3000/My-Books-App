import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp';

	const filterQuery = function(query) {

		console.log('function on 2')

		const dummyBook = {
			authors: [],
			id: '',
			imageLinks: '',
			title: 'No books found'
		}

		if (!query) {
			return [ dummyBook ];
		} else {
			console.log(query);
			let searchTerm = new RegExp(escapeRegExp(query), 'i');
			let searchObject = {query: searchTerm, maxResults: 20}
			console.log(BooksAPI.search(searchObject));
			return BooksAPI.search(searchObject); 
		}
	}

	const checkShelf = function(book, shelf) {
		return book.shelf === shelf.id;
	}

	const filterShelves = function(books, shelf) {
		return books.filter((book) => checkShelf(book, shelf));
	}

	export const getResults = function(books, filter, query, shelf) {
		if (filter === 'query') {
			console.log('function on');
			return filterQuery(query);
		}
		if (filter === 'shelf' && shelf) {
			return filterShelves(books, shelf);
		}
	}




