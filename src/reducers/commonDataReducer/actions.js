export const SET_INITIAL_DATA_ACTION = "SET_INITIAL_DATA_ACTION";
export const SET_VALUE_ACTION = "SET_VALUE_ACTION";

export function setInitialDataAction(initialData) {
    return {
        type: SET_INITIAL_DATA_ACTION,
        payload: initialData,
    }
}

export function setValueAction(key, value) {
    return {
        type: SET_VALUE_ACTION,
        payload:  { 
            key,
            value
        }
    }
}
