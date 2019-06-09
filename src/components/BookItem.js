import React from 'react'
import defaultPic from '../default.png'

/*
const BookItem = ({book}) => {
    return (
        <div>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            {book.volumeInfo.title}
        </div>
    )
};

export default BookItem;

*/


const BookItem = ({ book }) => {
    //const {volumeInfo: {authors, title, publisher, imageLinks, infoLink } } = book;
    return (
        <div className="book" key={book.volumeInfo.id}>
            <img src={displayImageSrc(book.volumeInfo.imageLinks)} alt={book.volumeInfo.title} />
            <div className="book__author">By: {displayAuthor(book.volumeInfo.authors)}</div>
            <div className="book__title">{displayTitle(book.volumeInfo.title)}</div>
            <div className="book__publisher">Published By: {displayPublisher(book.volumeInfo.publisher)}</div>
            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="book__btn">See this Book</a>
        </div>
    )
    
    function displayImageSrc(imageLinks) {
        return imageLinks ? imageLinks.smallThumbnail : defaultPic;
    }

    function displayAuthor(authors) {
        return authors ? authors.slice(0, 3).join(', ').slice(0, 60) : 'N/A';
    }

    function displayTitle(title) {
        return title ? title.slice(0, 60) : 'N/A';
    }

    function displayPublisher(publisher) {
        return publisher ? publisher.slice(0, 60) : 'N/A';
    }
}

export default BookItem;
