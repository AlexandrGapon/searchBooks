import { call, put, take, cancel, fork, delay } from 'redux-saga/effects'
import { setBooksId } from '../reducers/booksReducer'
import { FETCH_ERROR, LOAD_BOOKS_WITH_BTN, SET_IS_FETCHING, SET_QUERY_STRING } from '../reducers/searchReducer/actions'

export function* fetchBooks(payload, signal, type) {
    if (!payload) {
        yield put(setBooksId([]))
        return
    }
    if (type === SET_QUERY_STRING) {
        yield delay(1000)
    }
    yield put({ type: SET_IS_FETCHING, payload: true })
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
        yield put({ type: SET_IS_FETCHING, payload: false })
    }
    catch (error) {
        yield put({ type: FETCH_ERROR, payload: error })
        yield put({ type: SET_IS_FETCHING, payload: false })
    }
}

export function* loadOnAction() {
    let task
    let abortController = new AbortController()

    while (true) {
        const action = yield take([SET_QUERY_STRING, LOAD_BOOKS_WITH_BTN])
        if (task) {
            abortController.abort()
            yield cancel(task)
            abortController = new AbortController()
        }
        task = yield fork(fetchBooks, action.payload.trim(), abortController.signal, action.type)
    }
}
