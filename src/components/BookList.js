import React from 'react';
import BookItem from './BookItem'

const BookList = ({books}) => {
    const renderedList = books.map((book) => {
        return <BookItem></BookItem>
    });

    return (
        <div>
            {renderedList}
        </div>
    )
}

export default BookList;