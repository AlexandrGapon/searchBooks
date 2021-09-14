import {all} from 'redux-saga/effects'
import { loadOnChange, loadOnClick } from './searchSaga'

export function* rootWatcher() {
    yield all([
        loadOnClick(),
        loadOnChange()
    ])
}