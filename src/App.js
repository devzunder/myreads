import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router';
import swal from 'sweetalert2'
import Search from './modules/search';
import ListBooks from './modules/listBooks';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';



export default class BooksApp extends Component {

  state = { //estado da aplicação
    storedBooks:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then( //função de pegar os livros da memória, ligada na função de ciclo de vida componentDidMount
      success => {
        this.setState({
          storedBooks: success
        })
      }
    )
  };

  //função de troca de estantes
  changeShelf = (book, shelf) =>{
    BooksAPI.update(book, shelf).then( //chama a função update de BooksAPI
      update => {
          if (shelf === "none"){ //adiciona os alertas de acordo com a opção da estante
            swal({
            position: 'bottom-end',
            type: 'error',
            title: 'Livro removido das estantes!',
            showConfirmButton: false,
            timer: 1500
            })}
          else{
            swal({
              position: 'bottom-end',
              type: 'success',
              title: `Livro movido para a estante ${shelf} !`,
              showConfirmButton: false,
              timer: 1500
              })
          }     
        BooksAPI.getAll().then( //função que chama todos os livros da memória getALL de BooksAPI
          success => {
            this.setState({
              storedBooks: success
            })
          }
        )
      }
    )
  };
  // Função que checa a estante dos livros nos resultados das buscas
  checkShelf = (books) => {
    for (let book of books) {
      for (let storedBook of this.state.storedBooks) {
        if (storedBook.id === book.id  ) {
          book.shelf = storedBook.shelf
        }
        if(!book.shelf) {
          book.shelf = "none"
        }
      }
    }
  }

  render() {
    return (
    <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path='/' render={(props) => <ListBooks {...props} books={this.state.storedBooks} changeShelf={this.changeShelf}/>} />
            <Route path='/search' render={(props) => <Search {...props} changeShelf={this.changeShelf} books={this.state.storedBooks} checkShelf={this.checkShelf}/>}/>         
            <Redirect from='*' to='/'/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};
