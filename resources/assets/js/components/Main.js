import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Home, Plan, Play, Login,  Register, NotFound} from './pages';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/plan" component={Plan} />
                        <Route path="/play" component={Play} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
