import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import BooksPage from './components/BooksPage'
import SearchBar from './components/Searchbar'
import Pagination from './components/UI/Pagination/Pagination'
import { setPageBooksId } from './store/reducers/booksReducer'
import './styles/App.css'

const App = () => {
  const fetch = useSelector(state => state.search.isFetching)
  const booksId = useSelector(state => state.books.booksId)
  const books = useSelector(state => state.books.books)
  const perPage = useSelector(state => state.books.perPage)
  const currentPage = useSelector(state => state.books.currentPage)
  const error = useSelector(state => state.search.error)
  const dispatch = useDispatch()

  const pageBooks = []

  for (let i = (currentPage - 1) * 10; i < (currentPage - 1) * 10 + 10; i++) {
      if (booksId[i]) {
          pageBooks.push(booksId[i])
      }
  }

  useEffect(() => {
    dispatch(setPageBooksId(pageBooks))
    console.log(pageBooks)
  }, [pageBooks])

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
                  <BooksPage books={pageBooks} />
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
