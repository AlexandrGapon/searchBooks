import { SET_BOOKS_ID, SET_CURRENT_PAGE, SET_PAGE_BOOKS_ID, SET_PAGE_BOOKS } from './actions'

const initialState = {
    booksId: [],
    pageBooksId: [],
    books: [],
    currentPage: 1,
    perPage: 10,
    isLoading: false
}

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS_ID:
            return {
                ...state,
                booksId: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_PAGE_BOOKS_ID:
            return {
                ...state,
                pageBooksId: action.payload
            }
        case SET_PAGE_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state
    }
}

export const setBooksId = (data) => ({ type: SET_BOOKS_ID, payload: data })
export const setPageBooksId = (pageBooksId) => ({ type: SET_PAGE_BOOKS_ID, payload: pageBooksId })
export const setPageBooks = (pageBooks) => ({ type: SET_PAGE_BOOKS, payload: pageBooks })