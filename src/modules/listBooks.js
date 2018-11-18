import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Title from './title';
import BookShelf from './bookShelf';



export default class ListBooks extends Component{

  render(){
    const books = this.props.books   
    return(
      <div className="list-books">
      <Title/>
        <div className="list-books-content">
          <div>
            <BookShelf book={books.filter( book => (
            book.shelf === "currentlyReading"))} 
            bookShelfTitle={'Currently Reading'} changeShelf={this.props.changeShelf} />
            <BookShelf book={books.filter( book => (
            book.shelf === "read"))} 
            bookShelfTitle='Read'changeShelf={this.props.changeShelf} />
            <BookShelf book={books.filter( book => (
            book.shelf === "wantToRead"))} 
            bookShelfTitle='Want to Read' changeShelf={this.props.changeShelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to ='/search'>Add a book</Link>
        </div>  
      </div>
    )
  }
};


