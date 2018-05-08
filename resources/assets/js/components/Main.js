import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Home, Plan, Play, NotFound} from './pages';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/Plan" component={Plan} />
                        <Route path="/Play" component={Play} />
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
