import { call, put, take, cancel, fork, delay } from 'redux-saga/effects'
import { setIsFetching } from '../reducers/searchReducer'
import { setBooksId } from '../reducers/booksReducer'
import { SET_QUERY_STRING } from '../reducers/searchReducer/actions'

export function* fetchBooksOnClick(payload, signal) {
    yield put(setIsFetching(true))
    const booksId = []
    const response = yield call(fetch, `http://openlibrary.org/search.json?title=${payload}`, { signal })
    const data = yield call([response, response.json])
    data.docs.forEach(p => {
        if (p.edition_key) {
            booksId.push(...p.edition_key)
        }
    })
    yield put(setBooksId(booksId))
    yield put(setIsFetching(false))
}

export function* fetchBooksOnChange(payload, signal) {
    yield delay(1000)
    yield put(setIsFetching(true))
    const booksId = []
    const response = yield call(fetch, `http://openlibrary.org/search.json?title=${payload}`, { signal })
    const data = yield call([response, response.json])
    data.docs.forEach(p => {
        if (p.edition_key) {
            booksId.push(...p.edition_key)
        }
    })
    yield put(setBooksId(booksId))
    yield put(setIsFetching(false))
}


export function* loadOnClick() {
    let task
    let abortController = new AbortController()

    while (true) {
        const action = yield take('LOAD_BOOKS_WITH_BTN')
        if (task) {
            abortController.abort()
            yield cancel(task)
            abortController = new AbortController()
        }
        task = yield fork(fetchBooksOnClick, action.payload, abortController.signal)
    }
}

export function* loadOnChange() {
    let task
    let abortController = new AbortController()

    while (true) {
        const action = yield take(SET_QUERY_STRING)
        if (task) {
            abortController.abort()
            yield cancel(task)
            abortController = new AbortController()
        }
        task = yield fork(fetchBooksOnChange, action.payload, abortController.signal)
    }
}
