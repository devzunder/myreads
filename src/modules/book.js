import React, {Component} from 'react';
import None from '../img/none.png'
export default class Book extends Component {
  //Função que pega o evento (digitação) e já chama a função de trocar a estante via props.
  handleChange = event => {  
    this.props.changeShelf(this.props.book, event.target.value)
  }

  //Função que checa se algum dos elementos do objeto é do tipo undefined
  check = (info) => {
    if (typeof info != "undefined") {
      return info;
    }else {
      return false;
    }
  };

  render(){
    const book = this.props.book
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <img src={this.check(book.imageLinks)?book.imageLinks.thumbnail:None} alt={this.check(book.title)} className="book-cover" style={{ width: 128, height: 188 }} ></img>
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
          <div className="book-title">{this.check(book.title)}</div>
          <div className="book-authors">{this.check(book.authors)}</div>
        </div>
      </li>
    )
  }
};