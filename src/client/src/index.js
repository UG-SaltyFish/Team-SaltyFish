import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux";



// Import our React components
import App from './App';

import Landing from './components/landing'
import store from "./store";
import Register from './components/register'
import Login from './components/login'
import Profile  from './components/profile'
import Public from './components/publicprofile'

// Check for token to keep the user logged in
if (localStorage.jwtToken) {
    // Set auth header
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and expiry
    const decoded = token;
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for an expired token
    const currentTime = Date.now() / 1000; // Math to get it into milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = "./login";
    }
}



// Add the routes to the different pages from that you can access from the Navbar
const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />  
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/public/:user" component={Public} />
                    {/* Generic component so that all undefined routes redirect to 404 page. If no other route is matched, then this one will be */}
                    
                </Switch>
            </div>
        </Router>
    </Provider>
)
   
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();