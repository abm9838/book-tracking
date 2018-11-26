import React, { Component } from 'react'
import BookShelf from '../Components/BookShelf'
import AddSearchButton from '../Components/AddSearchButton'
import * as BooksAPI from "../BooksAPI";

class Home extends Component {
  state= {
    books: []
  } 
  // set each shelf with with title and shelf value
   constructor(props){
        super(props);

        this.shelves = [
            {title: 'Currently Reading', shelf: 'currentlyReading'},
            {title: 'Want to Read', shelf: 'wantToRead'},
            {title: 'Read', shelf: 'read'}
        ]
    }
    // sets up each book with a shelf name
    getBooks(name){
       return this.props.books.filter((book) => book.shelf === name)
      /* return this.props.showingBooks.filter((book) => book.shelf === name) */
    }
    // uses update function to change shelf accordingly
    moveShelf = (newBook, newShelf) => {
        BooksAPI.update(newBook, newShelf).then(() => {
            newBook.shelf = newShelf
            this.setState(state => ({
                books: this.props.books.filter(book => book.id !== newBook.id).concat([newBook])
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
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* interate through each shelf assigning title and shelf */}
            {this.shelves.map((bookshelf, i) => (
              <div key={i}>
                    <BookShelf
                      title={bookshelf.title}
                      shelfBooks={this.getBooks(bookshelf.shelf)}
                      moveShelf={this.props.moveShelf} />
                </div>
			))}
        </div>
          <AddSearchButton/>
      </div>
    )
  }
}

export default Home