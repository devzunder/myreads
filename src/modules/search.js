import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from '../utils/BooksAPI'
import Book from "./book";
export default class Search extends Component {

  state = {
    queryBooks: [ ]
  }

  //Função de busca 
  search = (query) =>{
    if (query) { //verifica se existe query
      BooksAPI.search(query).then( //chama a função search de dentro de BooksAPI
        success => { // recebe o sucesso da promisse 
          if (Array.isArray(success)) { //verifica a promisse retorna um array
            this.props.checkShelf(success)
            this.setState({queryBooks: success}) 
          }else{
            this.setState({queryBooks: []})
          }
        }
      )
    }
  };

  clear = () => { //função para limpar a pesquisa caso restem dados que retornem devido a delay em conexões. 
    setTimeout(()=>{
      this.setState ({
        queryBooks: []
      })
    },500)
  }



  handleChange = event => {  
    this.search(event.target.value)
    if (event.target.value === "") {
      this.clear()
    }
  }

  render(){
    const {changeShelf} = this.props 
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
            {this.state.queryBooks.map( book =>(
            <Book book={book} key={book.id} changeShelf={changeShelf}  />))}
          </ol>
        </div>
        {console.log(this.state.queryBooks)}
      </div>
    )
    }
  };