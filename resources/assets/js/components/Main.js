import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Home, Plan, Play} from './pages';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/plan" component={Plan} />
                    <Route path="/play" component={Play} />
                </div>
            </Router>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
