import React from 'react';
import Book from './book';

//alteração para stateless component
const BookShelf = ({book, bookShelfTitle, changeShelf}) =>{   
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {book.map( book  =>( 
                        <Book book={book} key={book.id} changeShelf={changeShelf}/>))} 
                    </ol>
                </div>
        </div>
    )
};

export default BookShelf;