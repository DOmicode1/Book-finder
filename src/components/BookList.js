import React from 'react';
import BookItem from './BookItem'

const BookList = ({ books, onBookSelect }) => {
    
    const renderedList = books.map((book) => {
        return( 
            <BookItem 
                key={book.id}
                onBookSelect = {onBookSelect}
                book={book} 
            >
            </BookItem>)
    });    

    return (
        <div className="ui list">
            {renderedList}
        </div>
    )
}

export default BookList;