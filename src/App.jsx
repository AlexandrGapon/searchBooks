import React from 'react'
// import { useState } from 'react'
import { useSelector } from 'react-redux'
import Book from './components/Book'
import SearchBar from './components/Searchbar'
import './styles/App.css'

const App = () => {
  const fetch = useSelector(state => state.search.isFetching)
  const booksId = useSelector(state => state.books.booksId)
  // const [page, setPage] = useState(1)

  const pages = []
  let pagesCount = 1

  if (booksId.length > 10) {
    pagesCount = Math.ceil(booksId.length / 10)
  }

  if (pagesCount > 1) {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
  }

  return (
    <div className='app'>
      <SearchBar />
      <div className='books-container'>
        {fetch
          ?
          <h1>Loading....</h1>
          :
          <>
            <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={1} cover='10586786' />
            <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={2} cover='10586786' />
            <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={3} cover='10586786' />
            <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={4} cover='10586786' />
            <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={5} cover='10586786' />
            <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={6} cover='10586786' />
          </>
        }
      </div>
      <div>
        {
        pages.map(p => <span key={p}>{p}</span>)
        }
      </div>
    </div>
  )
}

export default App
