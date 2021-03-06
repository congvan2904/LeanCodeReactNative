import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const defaultState = {
    cityName: null,
    temp: null,
    isLoading: false,
    error: false,
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return {
                cityName: null,
                temp: null,
                isLoading: true,
                error: false,
            }
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                error: false,
                cityName: action.cityName,
                temp: action.temp
            }
        case 'FETCH_ERROR':
            return {
                cityName: null,
                temp: null,
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
}
const store = createStore(reducer, applyMiddleware(thunk));
export default store;