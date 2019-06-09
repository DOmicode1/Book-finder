import React from 'react'

const BookDetail = ({book}) => {
    if(!book) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {book.volumeInfo.title}
        </div>
    )
}
export default BookDetail;