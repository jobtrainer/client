import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";
import Login from "./containers/Login";
import MainPage from "./containers/MainPage";
import Courses from "./containers/CoursesPage";
import DomainPage from "./containers/DomainPage";

import { createAppStore } from "./store";
import { setValueAction } from "./reducers/commonDataReducer/actions";

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

 
const store = createAppStore();

store.dispatch(setValueAction("domains", [
        {
            id: "frontend",
            title: "FrondEnd",
            description: "Learn all the Front end courses Learn all the Front end courses",
            imageUrl: "http://cdn.geekwire.com/wp-content/uploads/2015/06/code-fellows-shield1-265x300.png",
            courses: [
                {
                    id: "react", 
                    title: "ReactJs",
                    description: "Learn Reactjs",
                },
                {
                    id: "ng", 
                    title: "AngularJs",
                    description: "Learn AngularJs",
                },
                {
                    id: "vue", 
                    title: "VueJs",
                    description: "Learn VueJs",
                }
            ]
        },
        {
            id: "backend",
            title: "BackEnd",
            description: "Learn all the Back end courses Learn all the Back end courses",
            imageUrl: "https://static1.squarespace.com/static/55e561fce4b0524376a841d3/t/56695b077086d7721f2803eb/1486577990855/Back+end+development+icon"
        },
        {
            id: "qa",
            title: "QA",
            description: "Learn all the QA courses Learn all the QA courses",
            imageUrl: "http://sgbmithaiwala.com/onewebstatic/9d2d18004d-QA-ICON-small.png"
        },
    ]));
 
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainPage}/>
                <Route path="login" component={Login}/>
                <Route path=":domainId" component={DomainPage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);