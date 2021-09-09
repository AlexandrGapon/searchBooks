import debounce from 'lodash.debounce'
import React, { useRef, useState } from 'react'
import SearchButton from './UI/SearchButton/SearchButton'
import SearchInput from './UI/SearchInput/SearchInput'

const SearchBar = () => {
    const [queryString, setQueryString] = useState('')

    const search = useRef(
        debounce(query => {
            console.log(query)
        }, 1000)
    ).current

    const handleChange = (e) => {
        const value = e.target.value
        setQueryString(value)
        search(value)
    }

    return (
        <div className='searchbar'>
            <div className='searchbar__items'>
                <SearchInput placeholder='Введите название книги' value={queryString} onChange={handleChange} />
                <SearchButton onClick={() => search(queryString)}>
                    Найти
                </SearchButton>
            </div>
        </div>
    )
}

export default SearchBar