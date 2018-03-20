
(do i also implement { Link } from 'react-router-dom' and change between '/' and 'search' ?)

             <Link className="open-search" to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
             <Link className="close-search" to="/" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>

EXAMPLE: <Link to={{
  pathname: '/search',
  search: '?sort=title',
  state: { showSearchPage: true }
}}>




const Search = {
	close: function() {

	},
	open: function() {

	}
}


function CloseSearch(state) {
  {() => this.setState({ showSearchPage: false })}
}

function OpenSearch() {
  <div className="open-search">
*              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
  </div>  
}

export default Search
