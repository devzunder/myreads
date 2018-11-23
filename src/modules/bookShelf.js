import React, {Component} from 'react';
import Book from './book';

export default class BookShelf extends Component{

    render(){
        const book = this.props.book;    
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {Array.isArray(book)? book.map( book  =>(
                        <Book book={book} key={book.id} changeShelf={this.props.changeShelf}/>)):console.log('nada')} 
                    </ol>
                </div>
            </div>
        )
    }
};