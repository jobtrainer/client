import { createStore, combineReducers } from 'redux';
import commonDataReducer from "./reducers/commonDataReducer";
import { routerReducer } from 'react-router-redux';

export function createAppStore() {
    const reducer = combineReducers({scopes: commonDataReducer, routing: routerReducer});
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
}

