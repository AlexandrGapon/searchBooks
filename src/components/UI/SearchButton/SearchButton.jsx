import React from 'react'
import cl from './SearchButton.module.css'

const SearchButton = ({ children, ...props }) => {
    return (
        <button {...props} className={cl.search__button}>
            {children}
        </button>
    )
}

export default SearchButton