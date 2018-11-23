import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Book from "./book";

export default class Search extends Component {

handleChange = event => {  
  this.props.search(event.target.value)
  if (event.target.value === "") {
    this.props.clear()
  }
}

  render(){
    const Books = this.props.queryBooks
    return(
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link> 
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Busque o livro pelo título ou pelo autor" onChange={this.handleChange} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Books.map( book =>(
          <Book book={book} key={book.id} changeShelf={this.props.changeShelf} />))}
        </ol>
      </div>
      </div>
    )
  }
};


