import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Home, Plan, Play, Login,  Register, NotFound} from './pages';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/plan" component={Plan} />
                    <Route path="/play" component={Play} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path='/404' component={NotFound} />
                    {/* <Redirect from='*' to='/404' /> */}
                </div>
            </Router>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
