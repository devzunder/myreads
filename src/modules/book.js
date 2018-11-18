import React, {Component} from 'react';

export default class Book extends Component {
  
  handleChange = event => {  
    this.props.changeShelf(this.props.book, event.target.value)
  }


  render(){
    const book = this.props.book
    return(
      <li>
        <div className="book">
          <div className="book-top">
            {book.imageLinks.thumbnail?
            <img src={book.imageLinks.thumbnail} className="book-cover" style={{ width: 128, height: 188 }} ></img>:
            <img src='' className="book-cover" style={{ width: 128, height: 188 }} ></img>}
            <div className="book-shelf-changer">
              <select onChange={this.handleChange} value={book.shelf}>
                <option value="" >Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
};