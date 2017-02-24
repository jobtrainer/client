import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Login from "./containers/Login";

import { createAppStore } from "./store";
import { setValueAction } from "./reducers/commonDataReducer/actions";
<<<<<<< HEAD
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
=======
>>>>>>> f164da9cfb4b3ec2ca64117ffb219242da5ef1f4

const store = createAppStore();

store.dispatch(setValueAction("tutorials", [
    {
        header: "New tutoral",
        text: "Job training tutorial text example"
    }
]));

ReactDOM.render(
    <Provider store={store}>
<<<<<<< HEAD
        <Login></Login>
=======
    <Login></Login>
>>>>>>> f164da9cfb4b3ec2ca64117ffb219242da5ef1f4
    </Provider>,
    document.getElementById("root")
);