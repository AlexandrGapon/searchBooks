import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)