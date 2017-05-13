import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";
import Login from "./containers/Login";

import MainPage from "./containers/MainPage";
import CoursePage from "./containers/CoursePage";
import ScopePage from "./containers/ScopePage";
import StepPage from "./containers/StepPage";

import { createAppStore } from "./store";
import { setValueAction } from "./reducers/commonDataReducer/actions";

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

 
const store = createAppStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(setValueAction("scopes", [
        {
            id: "frontend",
            title: "FrondEnd",
            description: "Learn all the Front end courses Learn all the Front end courses",
            imageUrl: "http://cdn.geekwire.com/wp-content/uploads/2015/06/code-fellows-shield1-265x300.png",
            courses: [
                {
                    id: "react",
                    title: "React",
                    description: "This course teaches react, a ui library from Facebook",
                    status: "pending",
                    steps: [
                        {
                            title: "Overview",
                            description: "Here you will learn all about the react general overview",
                            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor nisl quis lectus tincidunt egestas. Mauris vel pellentesque diam. Mauris metus sapien, cursus ac tincidunt nec, mattis ut mi. Duis vel urna blandit, laoreet velit eu, ultricies felis. Sed scelerisque ullamcorper eros quis pellentesque. Donec laoreet risus ac turpis convallis egestas. Praesent in consequat quam. In mattis ultrices nulla. In hac habitasse platea dictumst. Sed efficitur arcu vestibulum cursus pharetra. Curabitur luctus ligula metus, vel sollicitudin sem porttitor a. Mauris et massa dui. Curabitur nec lectus a velit bibendum vehicula id vitae turpis.

Ut vulputate purus nunc, vel pulvinar tortor efficitur a. Integer at suscipit eros, ac varius nunc. Curabitur eu diam vitae arcu convallis suscipit. Maecenas nec purus gravida tortor aliquet fringilla. Mauris interdum in orci eget bibendum. Donec condimentum vestibulum consectetur. Ut laoreet porttitor nulla, nec tempor mauris varius et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Aenean vel ex facilisis, iaculis eros et, mattis tortor. Donec felis diam, pretium vel ex imperdiet, porta pharetra tellus. Donec eleifend eleifend tempus. Duis vehicula blandit eleifend. Duis consequat massa vitae est accumsan condimentum. Vestibulum at felis sed eros pretium dignissim sed in nisl. Donec enim sem, condimentum euismod nisi ut, auctor pretium nibh. Pellentesque vel tincidunt velit, ut lobortis lorem. Sed facilisis, odio vel efficitur placerat, metus massa facilisis ante, a sodales sapien neque interdum mauris. Mauris vel nisl quis quam venenatis fringilla eget at orci.

Integer augue felis, finibus sit amet pulvinar eu, mollis nec odio. Duis ac justo egestas, tempor magna vel, euismod nisl. Sed hendrerit ante non aliquet ornare. Praesent molestie commodo arcu, quis sagittis lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus et elit suscipit, ultrices mi ut, cursus mi. Cras scelerisque hendrerit elit sagittis volutpat. Proin pulvinar urna nec dignissim luctus. Fusce bibendum blandit dui, vitae dictum tortor suscipit quis. Proin tempus molestie risus, sit amet consectetur urna maximus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur massa mi, sit amet vestibulum velit dapibus in. Etiam commodo dui in felis condimentum fermentum.

Integer pellentesque ligula id nulla varius, id auctor diam porttitor. Nullam pretium in est in pharetra. Ut porta luctus egestas. Cras neque nisi, volutpat quis facilisis at, volutpat sit amet nulla. Sed lorem arcu, aliquam lobortis dolor a, luctus malesuada velit. Proin commodo dapibus nulla hendrerit facilisis. Duis eleifend odio purus, nec imperdiet sapien pulvinar eu. Proin tempus magna at ex varius, at sodales neque scelerisque. Etiam eu est porttitor, gravida ex non, sagittis libero. Cras tempor erat ipsum, imperdiet sodales enim sagittis at. Aliquam pretium purus sit amet justo tincidunt, id ornare tortor consectetur. Integer vehicula, lectus in consectetur aliquam, orci mauris maximus arcu, in mattis dolor est in felis.`
                        },
                        {
                            title: "Installation",
                            description: "Learn about installing",
                            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor nisl quis lectus tincidunt egestas. Mauris vel pellentesque diam. Mauris metus sapien, cursus ac tincidunt nec, mattis ut mi. Duis vel urna blandit, laoreet velit eu, ultricies felis. Sed scelerisque ullamcorper eros quis pellentesque. Donec laoreet risus ac turpis convallis egestas. Praesent in consequat quam. In mattis ultrices nulla. In hac habitasse platea dictumst. Sed efficitur arcu vestibulum cursus pharetra. Curabitur luctus ligula metus, vel sollicitudin sem porttitor a. Mauris et massa dui. Curabitur nec lectus a velit bibendum vehicula id vitae turpis.

Ut vulputate purus nunc, vel pulvinar tortor efficitur a. Integer at suscipit eros, ac varius nunc. Curabitur eu diam vitae arcu convallis suscipit. Maecenas nec purus gravida tortor aliquet fringilla. Mauris interdum in orci eget bibendum. Donec condimentum vestibulum consectetur. Ut laoreet porttitor nulla, nec tempor mauris varius et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Aenean vel ex facilisis, iaculis eros et, mattis tortor. Donec felis diam, pretium vel ex imperdiet, porta pharetra tellus. Donec eleifend eleifend tempus. Duis vehicula blandit eleifend. Duis consequat massa vitae est accumsan condimentum. Vestibulum at felis sed eros pretium dignissim sed in nisl. Donec enim sem, condimentum euismod nisi ut, auctor pretium nibh. Pellentesque vel tincidunt velit, ut lobortis lorem. Sed facilisis, odio vel efficitur placerat, metus massa facilisis ante, a sodales sapien neque interdum mauris. Mauris vel nisl quis quam venenatis fringilla eget at orci.

Integer augue felis, finibus sit amet pulvinar eu, mollis nec odio. Duis ac justo egestas, tempor magna vel, euismod nisl. Sed hendrerit ante non aliquet ornare. Praesent molestie commodo arcu, quis sagittis lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus et elit suscipit, ultrices mi ut, cursus mi. Cras scelerisque hendrerit elit sagittis volutpat. Proin pulvinar urna nec dignissim luctus. Fusce bibendum blandit dui, vitae dictum tortor suscipit quis. Proin tempus molestie risus, sit amet consectetur urna maximus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur massa mi, sit amet vestibulum velit dapibus in. Etiam commodo dui in felis condimentum fermentum.

Integer pellentesque ligula id nulla varius, id auctor diam porttitor. Nullam pretium in est in pharetra. Ut porta luctus egestas. Cras neque nisi, volutpat quis facilisis at, volutpat sit amet nulla. Sed lorem arcu, aliquam lobortis dolor a, luctus malesuada velit. Proin commodo dapibus nulla hendrerit facilisis. Duis eleifend odio purus, nec imperdiet sapien pulvinar eu. Proin tempus magna at ex varius, at sodales neque scelerisque. Etiam eu est porttitor, gravida ex non, sagittis libero. Cras tempor erat ipsum, imperdiet sodales enim sagittis at. Aliquam pretium purus sit amet justo tincidunt, id ornare tortor consectetur. Integer vehicula, lectus in consectetur aliquam, orci mauris maximus arcu, in mattis dolor est in felis.`
                        },
                        {
                            title: "And more!",
                            description: "Wohoo",
                            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor nisl quis lectus tincidunt egestas. Mauris vel pellentesque diam. Mauris metus sapien, cursus ac tincidunt nec, mattis ut mi. Duis vel urna blandit, laoreet velit eu, ultricies felis. Sed scelerisque ullamcorper eros quis pellentesque. Donec laoreet risus ac turpis convallis egestas. Praesent in consequat quam. In mattis ultrices nulla. In hac habitasse platea dictumst. Sed efficitur arcu vestibulum cursus pharetra. Curabitur luctus ligula metus, vel sollicitudin sem porttitor a. Mauris et massa dui. Curabitur nec lectus a velit bibendum vehicula id vitae turpis.

Ut vulputate purus nunc, vel pulvinar tortor efficitur a. Integer at suscipit eros, ac varius nunc. Curabitur eu diam vitae arcu convallis suscipit. Maecenas nec purus gravida tortor aliquet fringilla. Mauris interdum in orci eget bibendum. Donec condimentum vestibulum consectetur. Ut laoreet porttitor nulla, nec tempor mauris varius et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Aenean vel ex facilisis, iaculis eros et, mattis tortor. Donec felis diam, pretium vel ex imperdiet, porta pharetra tellus. Donec eleifend eleifend tempus. Duis vehicula blandit eleifend. Duis consequat massa vitae est accumsan condimentum. Vestibulum at felis sed eros pretium dignissim sed in nisl. Donec enim sem, condimentum euismod nisi ut, auctor pretium nibh. Pellentesque vel tincidunt velit, ut lobortis lorem. Sed facilisis, odio vel efficitur placerat, metus massa facilisis ante, a sodales sapien neque interdum mauris. Mauris vel nisl quis quam venenatis fringilla eget at orci.

Integer augue felis, finibus sit amet pulvinar eu, mollis nec odio. Duis ac justo egestas, tempor magna vel, euismod nisl. Sed hendrerit ante non aliquet ornare. Praesent molestie commodo arcu, quis sagittis lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus et elit suscipit, ultrices mi ut, cursus mi. Cras scelerisque hendrerit elit sagittis volutpat. Proin pulvinar urna nec dignissim luctus. Fusce bibendum blandit dui, vitae dictum tortor suscipit quis. Proin tempus molestie risus, sit amet consectetur urna maximus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur massa mi, sit amet vestibulum velit dapibus in. Etiam commodo dui in felis condimentum fermentum.

Integer pellentesque ligula id nulla varius, id auctor diam porttitor. Nullam pretium in est in pharetra. Ut porta luctus egestas. Cras neque nisi, volutpat quis facilisis at, volutpat sit amet nulla. Sed lorem arcu, aliquam lobortis dolor a, luctus malesuada velit. Proin commodo dapibus nulla hendrerit facilisis. Duis eleifend odio purus, nec imperdiet sapien pulvinar eu. Proin tempus magna at ex varius, at sodales neque scelerisque. Etiam eu est porttitor, gravida ex non, sagittis libero. Cras tempor erat ipsum, imperdiet sodales enim sagittis at. Aliquam pretium purus sit amet justo tincidunt, id ornare tortor consectetur. Integer vehicula, lectus in consectetur aliquam, orci mauris maximus arcu, in mattis dolor est in felis.`
                        },
                    ]
                },
                {
                    id: "angular",
                    title: "Angular",
                    description: "This course teaches angular, a ui library from Google",
                    status: "pending",
                },
                {
                    id: "vue",
                    title: "Vue",
                    description: "This course teaches vue, a ui library",
                    status: "pending",
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
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MainPage}/>
                <Route path="/:scopeId" component={ScopePage}/>
                <Route path="/:scopeId/:courseId" component={CoursePage}/>
                <Route path="/:scopeId/:courseId/:step" component={StepPage}/>
                <Route path="login" component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);