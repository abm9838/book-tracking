import React, { Component } from 'react'
import bookImg from "../icons/ImageNotFound.jpg"

class Book extends Component {
  // function that passes value to moveShelf
  changeShelf = (book, event) => {
       this.props.moveShelf(book, event.target.value);
   }

  render() {
    return (
      <ol className="books-grid">
        {this.props.set.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
               {/* unfound thumbnail hnadled in CSS */}
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : bookImg})` }} />
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={(e) => this.changeShelf(book, e)}>
                      <option value={"move"} disabled>Move to...</option>
                      <option value={"currentlyReading"}>Currently Reading</option>
                      <option value={"wantToRead"}>Want to Read</option>
                      <option value={"read"}>Read</option>
                      <option value={"none"}>None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
    )
  }
}

export default Book
