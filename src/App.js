import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router';
import swal from 'sweetalert2'
import Search from './modules/search';
import ListBooks from './modules/listBooks';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

export default class BooksApp extends Component {

state = {
  queryBooks : [],
  books:[]
}


componentDidMount(){
  BooksAPI.getAll().then(
    success => {
      this.setState({
        books: success
      })
    }
  )
};

search = (query) =>{
  if (query) {
    BooksAPI.search(query).then(
      success => {
        if (Array.isArray(success)=== true) {
          this.setState({queryBooks: success})
        }else{
          this.setState({queryBooks: []})
        }
      }
    )
  }else {
  this.setState({queryBooks: []})
  }
};

changeShelf = (book, shelf) =>{
  BooksAPI.update(book, shelf).then(
    update => {
      swal({
      position: 'bottom-end',
      type: 'success',
      title: 'Livro movido com sucesso!',
      showConfirmButton: false,
      timer: 1500
      })
      BooksAPI.getAll().then(
        success => {
          this.setState({
            books: success
          })
        }
      )
    }
  )
};

  render() {
    return (
    <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path='/' render={(props) => <ListBooks {...props} books={this.state.books} changeShelf={this.changeShelf}/>} />
            <Route path='/search' render={(props) => <Search {...props} search={this.search} changeShelf={this.changeShelf} queryBooks={this.state.queryBooks}/>}/>         
            <Redirect from='*' to='/'/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};