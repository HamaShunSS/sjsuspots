import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.min.css';
import ReactGA from 'react-ga';

// import auth from './auth.ts'; // Sample authentication provider

const trackingId = "UA-153423846-1"; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// ReactGA.set({
//     userId: auth.currentUserId(),
//     // any data that is relevant to the user session
//     // that you would like to track with google analytics
// })

function initializeReactGA() {
    ReactGA.initialize('UA-153423846-1');
    ReactGA.pageview('/');
}

ReactDOM.render(

    <App />,
    document.getElementById('root'),
    initializeReactGA()
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
