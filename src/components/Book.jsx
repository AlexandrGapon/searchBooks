import React from 'react'

const Book = ({ author, title, cover, isbn, ...props }) => {


    return (
        <div className='book' >
            <img src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt='Book Cover' className='book__pic' />
            <div className='book__items'>
                <span className='book__author'>Author: {author}</span>
                <span className='book__title'>Title: {title}</span>
            </div>
        </div>
    )
}

export default Book