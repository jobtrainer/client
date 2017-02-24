import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import MainPage from "./containers/MainPage";
import { createAppStore } from "./store";
import { setValueAction } from "./reducers/commonDataReducer/actions";

const store = createAppStore();

store.dispatch(setValueAction("tutorials", [
    {
        header: "New tutoral",
        text: "Job training tutorial text example"
    }
]));

ReactDOM.render(
    <Provider store={store}>
        <MainPage></MainPage>
    </Provider>,
    document.getElementById("root")
);