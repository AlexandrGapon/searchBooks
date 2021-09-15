import {all} from 'redux-saga/effects'
import { loadPageBooks } from './booksSaga'
import { loadOnAction } from './searchSaga'

export function* rootWatcher() {
    yield all([
        loadOnAction(),
        loadPageBooks()
    ])
}