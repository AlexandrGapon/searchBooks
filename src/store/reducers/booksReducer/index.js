export const SET_BOOKS_ID = "SET_BOOKS_ID"

const initialState = {
    booksId: [],
    books: [],
    isLoading: false
}

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS_ID:
            return {
                ...state,
                booksId: action.payload
            }
        default:
            return state
    }
}

export const setBooksId = (data) => ({type: SET_BOOKS_ID, payload: data})