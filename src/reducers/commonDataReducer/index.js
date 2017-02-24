import {SET_INITIAL_DATA_ACTION, SET_VALUE_ACTION} from "./actions";

import {Map} from "Immutable";

export default function commonDataReducer(state = Map({}), {type, payload}) {
    let newState;
    switch (type) {
        case SET_INITIAL_DATA_ACTION: 
            newState = Map(payload);

            break;
        case SET_VALUE_ACTION:
            newState = state.set(payload.key, payload.value);

            break;
        default: {
            newState = state;
        }
    }

    return newState;
}