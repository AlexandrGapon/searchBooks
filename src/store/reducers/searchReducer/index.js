import { SET_IS_FETCHING, SET_QUERY_STRING } from './actions'

const initialState = {
    queryString: '',
    isFetching: false,
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY_STRING:
            return {
                ...state,
                queryString: action.payload
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

export const setQueryString = (string) => ({ type: SET_QUERY_STRING, payload: string })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, payload: isFetching })