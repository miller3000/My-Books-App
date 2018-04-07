WRITE A PROMISE FOR YOUR FUNCTIONS

//search results are not filtering as more letters are typed into the screen
//if query does not/cannot match a search term, no books should be displayed
//
//should immediately re-render when property changes- componentDidUpdate(); - make it quicker using LOCAL state
//
//if rendered, shelf should equal selectedshelf... seems to be working?
//if searched, should be able to add shelf property to selectedshelf... seems to be working?
//displayed shelf and state shelf are not aligned... do i need selectedshelf at all?
//
//

//search results are not filtering as more letters are typed into the screen
//if query does not/cannot match a search term, no books should be displayed
//
//should immediately re-render when property changes- componentDidUpdate(); - make it quicker using LOCAL state
//
//if rendered, shelf should equal selectedshelf... seems to be working?
//if searched, should be able to add shelf property to selectedshelf... seems to be working?
//displayed shelf and state shelf are not aligned... do i need selectedshelf at all?
//
//



//  setShelf = (event) => {
//    this.setState({ newShelf: event.target.value });
//  }

//  setBook = (bookSearch) => {
//    bookIdx = this.state.books.findIndex(book => book.id === bookSearch.id);
//    this.setState({ books[bookIdx].shelf === this.state.newShelf });
//  }

//  updateBook = (book, event) => {
//    if (book.shelf !== event.target.value) {
//      this.setShelf(event).then(this.setBook(book));
//    }
//  }

//let updatedBooks = this.state.books;
//updatedBooks[bookIdx].

//    this.setState(prevState => ({

//      this.state.books[bookIdx].shelf === event.target.value,

//  changeShelf = (bookIdx, event) => {
//    this.setState({
//      books: newBooks,
//      update: { book: books[bookIdx], shelf: event.target.value }
//    });
//  }

//  updateBook = (book, event) => {
//    this.setBook(book)
//    .then(idx => changeShelf(idx, event))
//  }


//  moveToShelf = (book, event) => {
//    let newShelf = event.target.value;
//    BooksAPI.update(book, newShelf).then(this.getBooks());
//  }


// if path is /
//   filter: shelfFunc
// if path is /search
//   filter: searchFunc

  // state = { query: '', searchResults: [] };

  // updateQuery = (newQuery) => {
  //  this.setState({ query: newQuery.trim() })
  // }

  // searchAPI = (query, searchResults) => {
  //  BooksAPI.search(query).then(books => this.setState({ searchResults: books }));
  // }

  // getBooks = (query, searchResults, event) => {
  //  this.updateQuery(event.target.value);
  //  this.searchAPI(this.state.query, this.state.searchResults);
  //  console.log(this.state.query);
  //  console.log(this.state.searchResults);
  // }

  // filterFunc = 'query';
  // 
  // 
  // I LIKE HOW KEYWORD STAYS IN SEARCH BAR WHEN I GO BACK... CAN I ADD AN "X" TO CLEAR THE SEARCH BAR?
  // ***DISCONNECT BETWEEN BOOKS IN SHELFFUNC AND MAIN BOOKS STATE***
  // SHOULDCOMPONENTUPDATE - SEARCHBOOKS VS UPDATEBOOKS ???
  // ALSO SET SO CURSOR IS AUTOMATICALLY IN SEARCH BAR, RATHER THAN HAVING TO CLICK ON IT
//SEARCH PAGE NO LONGER SHOWS DEFAULT SHELF; OBJECTS DON'T HAVE SHELVES.


  searchForBooks = (searchEvent) => {
    let query = searchEvent.target.value.trim();
    this.setState({ query: query });
    BooksAPI.search(this.state.query)
    .then(books => this.setState({ searchResults: books }));
//    let results = ShelfFunc.getResults(this.state.query, this.state.books);
//    this.setState({ searchResults: results });
  }



//
//
//if update state will change, then update API
//if location changes to home, then getBooks()
//
// history.listen(manageRender(location));
// 
//    .then(update=> BooksAPI.get(this.state.update.book.id))
//    .then(book=> console.log)
//    this.getBooks();
//    BooksAPI.search(this.state.query)
//    .then(books => this.setState({ searchResults: books }));
   }
