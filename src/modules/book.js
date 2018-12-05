import React, {Component} from 'react';
import None from '../img/none.png'
export default class Book extends Component {
  //Função que pega o evento (digitação) e já chama a função de trocar a estante via props.
  handleChange = event => {  
    this.props.changeShelf(this.props.book, event.target.value)
  }

  render(){
    const book = this.props.book
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <img src={(book.imageLinks)?book.imageLinks.thumbnail:None} alt={book.title?book.title:false} className="book-cover" style={{ width: 128, height: 188 }} ></img>
            <div className="book-shelf-changer">
              <select onChange={this.handleChange} value={book.shelf}>
                <option value="" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title ? book.title : false}</div>
          <div className="book-authors">{book.authors ? book.authors : false}</div>
        </div>
      </li>
    )
  }
};