import React, { Component } from 'react'
import { Router, Route} from 'react-router'
import {createBrowserHistory} from 'history';
import Home from './views/Home'
import SearchBooks from './views/SearchBooks'
import './App.css'
import * as BooksAPI from "./BooksAPI";

const browserHistory = createBrowserHistory();

class BooksApp extends Component {
state = {
  books: []
}
// uses update function to change shelf accordingly
moveShelf = (newBook, newShelf) => {
  BooksAPI.update(newBook, newShelf).then(() => {
    newBook.shelf = newShelf
    this.setState(state => ({
      books: state.books.filter(book => book.id !== newBook.id).concat([newBook])
    }))
  })
}

componentDidMount() {
  BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books: books
      });
    });
}


render() {
  return (
    <Router history={browserHistory}>
    <div className="app">

    <Route exact path="/" render= {()=>(
      <Home books={this.state.books} moveShelf={this.moveShelf} />
    )}  />

    <Route exact path="/search" render= {()=>(
      <SearchBooks moveShelf={this.moveShelf} books={this.state.books}/>
    )}  />
  
    </div>
    </Router>
    )
  }
}

export default BooksApp
