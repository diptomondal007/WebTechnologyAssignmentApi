import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import SignupPage from './components/SignupPage';
import Profile from './components/profile';
import { createHashHistory ,createBrowserHistory} from 'history'
export const history = createBrowserHistory();

export default class App extends React.Component{
    render(){
        return(
            <Router>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={SignupPage} />
                    <Route path="/profile/:id" component={Profile} />
                </Switch>
            </Router>

        );
    }
}