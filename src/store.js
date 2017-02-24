import { createStore } from 'redux';
import commonDataReducer from "./reducers/commonDataReducer";


export function createAppStore() {
    const reducer = commonDataReducer;
    const store = createStore(reducer);

    return store;
}

