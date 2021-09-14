import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQueryString } from '../store/reducers/searchReducer'
import SearchButton from './UI/SearchButton/SearchButton'
import SearchInput from './UI/SearchInput/SearchInput'

const SearchBar = () => {
    const dispatch = useDispatch()
    const queryString = useSelector(state => state.search.queryString)

    return (
        <div className='searchbar'>
            <div className='searchbar__items'>
                <SearchInput
                    placeholder='Введите название книги'
                    value={queryString}
                    onChange={(e) => dispatch(setQueryString(e.target.value))}
                />
                <SearchButton onClick={() => dispatch({ type: 'LOAD_BOOKS_WITH_BTN', payload: queryString })}>
                    Найти
                </SearchButton>
            </div>
        </div>
    )
}

export default SearchBar