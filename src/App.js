import React from 'react'
import { Route } from 'react-router-dom'
import ListMyBooks from './ListMyBooks'
import SearchAllBooks from './SearchAllBooks'
import './App.css'

function BooksApp() {
  return (
    <div className="app">

      <Route exact path='/' render={() => (
        <ListMyBooks/>
      )}
      />

      <Route path='/search' render={() => (
        <SearchAllBooks/>
      )}
      />

    </div>
  )
}

export default BooksApp
