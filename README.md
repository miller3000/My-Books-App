# My Books

My Books is a web app that allows a user to search for books and add them to (or remove from) a personal library. The library has three categories, or "shelves": Currently Reading, Want to Read, and Already Read. The app displayes the cover, title, and author(s) of each book.

This project was bootstrapped with the [Create React App](https://github.com/facebookincubator/create-react-app), and is based on the starter code for "MyReads" by Udacity.

_Version and documentation authored April 2018_

## Contents

- [App.js](/src/App.js): Contains application state and JSX code for rendering application
- [Index.js](/src/index.js): Calls React to render App components within HTML

A React component tree can be found within [App.js](/src/App.js) and in each of the other src files, along with documentation for the various components of the site.

## Installation

To clone and run this application, you will need Git installed on your computer.

`$ git clone https://github.com/miller3000/reactnd-project-myreads-starter`

To install dependencies, from within the project directory:

`$ npm install`

To begin the React server and run the application:

`$ npm start`


## Limitations For Users

Udacity provided a backend server for development, accessible through
the [Books API](/src/BooksAPI.js). The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, a list of which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). Those terms are the _only_ terms that will work with the backend.

## Improvements / Issues

At this time, My Books is still in a React development build. To improve performance, a production build will be released in the future.

There can be a slight lag in performance between adding a book to the library from the search page, and rerendering on the main shelves page. I will investigate further and improve this issue.

Please submit any other bugs and feature requests to [@miller3000](https://github.com/miller3000/).

## To-do

_Primary:_

- [ ] Improve search bar use by adding a clear text (X) button
- [ ] Improve search bar use by auto-placing cursor in search bar upon search page load
- [ ] Sort books not only by shelves/categories, but also alphabetically by title, alphabetically by author, or by date added to library
- [ ] Add a feature to check user removal of a book from library (e.g., "Are you sure...?")

_Secondary:_

- [ ] Allow user to see history of previous searches
- [ ] Improve page styling, including highlight or animation of book covers upon rollover and upon shelf change
- [ ] Improve page styling, including visual placeholder for an empty search or empty shelf
- [ ] Search books just within user library
- [ ] Move books between shelves in bulk
- [ ] Book ratings function
- [ ] Design and insert copyright/publisher attribution for books and book covers, without adding clutter to design
- [ ] Use different server than Udacity's -- increase number of books available, increase number of functioning search terms

## Credits

This code was originally forked from starter code provided by Udacity at [https://github.com/udacity/reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter).

## License

Copyright 2018 Andrew Miller

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

