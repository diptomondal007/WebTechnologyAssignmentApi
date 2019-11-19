import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app';
import axios from "axios";
import history from './app';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
axios.defaults.baseURL = "http://127.0.0.1:5000/api";

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }

ReactDOM.render(

    <Provider store={store}>
        <Fragment>
            <Router history={history}>
                <App />
            </Router>
        </Fragment>
    </Provider>,
    document.getElementById('root')
);