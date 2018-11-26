import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
            <Book
              set={this.props.shelfBooks}
              moveShelf={this.props.moveShelf} />
        </div>
      </div>
    )
  }
}

export default BookShelf
