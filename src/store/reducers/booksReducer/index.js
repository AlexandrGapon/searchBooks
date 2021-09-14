import { SET_BOOKS_ID, SET_CURRENT_PAGE } from './actions'

const initialState = {
    booksId: [],
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
        default:
            return state
    }
}

export const setBooksId = (data) => ({ type: SET_BOOKS_ID, payload: data })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page })