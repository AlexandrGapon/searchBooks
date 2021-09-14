import { call, put, take, cancel, fork, delay } from 'redux-saga/effects'
import { setFetchError, setIsFetching } from '../reducers/searchReducer'
import { setBooksId } from '../reducers/booksReducer'
import { SET_QUERY_STRING } from '../reducers/searchReducer/actions'

export function* fetchBooks(payload, signal, type) {
    if (!payload) {
        yield put(setBooksId([]))
        return
    }
    if (type === SET_QUERY_STRING) {
        yield delay(1000)
    }
    yield put(setIsFetching(true))
    try {
        const response = yield call(fetch, `http://openlibrary.org/search.json?title=${payload}`, { signal })
        const data = yield call([response, response.json])
        const booksId = []
        data.docs.forEach(p => {
            if (p.edition_key) {
                booksId.push(...p.edition_key)
            }
        })
        yield put(setBooksId(booksId))
        yield put(setIsFetching(false))
    }
    catch(error) {
        yield put(setFetchError(error))
        yield put(setIsFetching(false))
    }
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
        task = yield fork(fetchBooks, action.payload, abortController.signal, action.type)
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
        task = yield fork(fetchBooks, action.payload, abortController.signal, action.type)
    }
}
