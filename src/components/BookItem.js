import './BookItem.css'
import React from 'react'
import defaultPic from '../default.png'


const BookItem = ({ book, onBookSelect}) => {
    return (

        <div 
            onClick = {() => onBookSelect(book)}
            className="item book" 
            key={book.volumeInfo.id}>
            <img className="ui image" src={displayImageSrc(book.volumeInfo.imageLinks)} alt={book.volumeInfo.title} />
            <div className="content">
                <div className="book__title header">{displayTitle(book.volumeInfo.title)}</div>
                <div className="book__author">Author: {displayAuthor(book.volumeInfo.authors)}</div>                    
                <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="book__btn">See this Book</a>
            </div>
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

}

export default BookItem;
