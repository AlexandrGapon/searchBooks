import React from 'react'
import { useSelector } from 'react-redux'
import Book from './components/Book'
import SearchBar from './components/Searchbar'
import Pagination from './components/UI/Pagination/Pagination'
import './styles/App.css'

const App = () => {
  const fetch = useSelector(state => state.search.isFetching)
  const booksId = useSelector(state => state.books.booksId)
  const perPage = useSelector(state => state.books.perPage)
  const currentPage = useSelector(state => state.books.currentPage)
  const error = useSelector(state => state.search.error)

  return (
    <div className='app'>
      <SearchBar />
      {
        error
          ?
          <h1 style={{ color: 'red', fontSize: '45px' }}>Произошла ошибка</h1>
          :
          <>
            {fetch
              ?
              <h1>Loading....</h1>
              :
              <>
                <div className='books-container'>
                  <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={1} cover='10586786' />
                  <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={2} cover='10586786' />
                  <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={3} cover='10586786' />
                  <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={4} cover='10586786' />
                  <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={5} cover='10586786' />
                  <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={6} cover='10586786' />
                </div>
                <Pagination pagesItems={booksId} perPage={perPage} currentPage={currentPage} />
              </>
            }
          </>
      }
    </div >
  )
}

export default App
