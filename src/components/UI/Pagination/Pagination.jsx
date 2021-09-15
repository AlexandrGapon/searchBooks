import React from 'react'
import { useDispatch } from 'react-redux'
import { SET_CURRENT_PAGE } from '../../../store/reducers/booksReducer/actions'
import { createPages } from '../../../utils/pagesCreator'
import cl from './Pagination.module.css'

const Pagination = ({ pagesItems, currentPage, perPage }) => {
    const dispatch = useDispatch()
    const pages = []
    let pagesCount = 1

    if (pagesItems.length > 10) {
        pagesCount = Math.ceil(pagesItems.length / perPage)
    }

    if (pagesCount > 1) {
        createPages(pages, pagesCount, currentPage)
    }

    return (
        <div className={cl.pagination}>
            {pages.map(p => (<span 
                            key={p}
                            className={p === currentPage ? cl.pagination__item_current : cl.pagination__item}
                            onClick={() => dispatch({ type: SET_CURRENT_PAGE, payload: p })}
                            >{p}</span>))}
        </div>
    )
}

export default Pagination