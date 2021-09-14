import { SET_IS_FETCHING, SET_QUERY_STRING, FETCH_ERROR } from './actions'

const initialState = {
    queryString: '',
    isFetching: false,
    error: null
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY_STRING:
            return {
                ...state,
                queryString: action.payload,
                error: null
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export const setQueryString = (string) => ({ type: SET_QUERY_STRING, payload: string })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, payload: isFetching })
export const setFetchError = (error) => ({ type: FETCH_ERROR, payload: error })