import React from 'react'
import cl from './SearchInput.module.css'

const SearchInput = (props) => {
    return (
        <input type='text' className={cl.search__input} {...props} />
    )
}

export default SearchInput