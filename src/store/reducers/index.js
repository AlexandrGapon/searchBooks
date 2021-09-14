import { combineReducers } from 'redux'
import { booksReducer } from './booksReducer'
import { searchReducer } from './searchReducer'


export const rootReducer = combineReducers({
    search: searchReducer,
    books: booksReducer
})