import React from 'react'
import Book from './Book'

const BooksPage = ({ books }) => {

    return (
        <>
            {books.length > 0 &&
                books.map(p => (
                    <Book
                        key={p}
                        author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={p} cover='10586786'
                    />
                ))
            }
        </>
    )
}

export default BooksPage