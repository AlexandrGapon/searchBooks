import { takeEvery, all, call, put } from 'redux-saga/effects'
import { setPageBooks } from '../reducers/booksReducer'
import { SET_PAGE_BOOKS_ID } from '../reducers/booksReducer/actions'


export function* fetchPageBooks(action) {
    let books = []
    try {
        const responses = yield all(action.payload.map(elem => {
            return call(fetch, `https://openlibrary.org/books/${elem}.json`)
        }))
        books = yield all(responses.map(elem => {
            return call([elem, elem.json])
        }
        ))
    } catch (e) {

    }
    console.log(books)
    // yield put(setPageBooks(books))
}

// export function* fetchAuthors (action) {
//     try {

//     }
// }

export function* loadPageBooks() {
    yield takeEvery(SET_PAGE_BOOKS_ID, fetchPageBooks)
}

