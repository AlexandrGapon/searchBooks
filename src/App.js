import Book from './components/Book'
import SearchBar from './components/Searchbar'
import './styles/App.css'

const App = () => {
  return (
    <div className='app'>
      <SearchBar />
      <div className='books-container'>
        <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={1} cover='10586786' />
        <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={1} cover='10586786' />
        <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={1} cover='10586786' />
        <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={1} cover='10586786' />
        <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={1} cover='10586786' />
        <Book author='J.R.R. Tolkien' title='The Lord of the Rings' isbn={1} cover='10586786' />
      </div>
    </div>
  )
}

export default App
