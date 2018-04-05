//import * as BooksAPI from './BooksAPI'


	// state = { query: '', searchResults: [] };

	// updateQuery = (newQuery) => {
	// 	this.setState({ query: newQuery.trim() })
	// }
	// 

const setFilter = () => {
	location.pathname === '/search' ? 'query' : 'shelf'
}

// 	searchAPI = (query, searchResults) => {
// 		BooksAPI.search(query).then(books => this.setState({ searchResults: books }));
// 	}

// getBooks = (query, searchResults, event) => {
// 	this.updateQuery(event.target.value);
// 	this.searchAPI(this.state.query, this.state.searchResults);
// }
