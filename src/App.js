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
    queryBooks : [],
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then( //função de pegar os livros da memória, ligada na função de ciclo de vida componentDidMount
      success => {
        this.setState({
          books: success
        })
      }
    )
  };
  //Função de busca 
  search = (query) =>{
    if (query) { //verifica se existe query
      BooksAPI.search(query).then( //chama a função search de dentro de BooksAPI
        success => { // recebe o sucesso da promisse 
          if (Array.isArray(success)=== true) { //verifica a promisse retorna um array
            this.setState({queryBooks: success}) 
          }else{
            this.setState({queryBooks: []})
          }
        }
      )
    }else{
      this.setState({queryBooks: []})
    }
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
              books: success
            })
          }
        )
      }
    )
  };

  clear = () => { //função para limpar a pesquisa caso restem dados que retornem devido a delay em conexões. 
    setTimeout(()=>{
      this.setState ({
        queryBooks: []
      })
    },500)
  }

  render() {
    return (
    <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path='/' render={(props) => <ListBooks {...props} books={this.state.books} changeShelf={this.changeShelf}/>} />
            <Route path='/search' render={(props) => <Search {...props} clear={this.clear} search={this.search} changeShelf={this.changeShelf} queryBooks={this.state.queryBooks}/>}/>         
            <Redirect from='*' to='/'/>
          </Switch>
          {console.log(this.state)}
        </div>
      </BrowserRouter>
    )
  }
};