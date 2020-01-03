import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Campaign from '../pages/campaign';
import Login from '../pages/login';
import PageNotFound from '../pages/pageNotFound';
import Page from '../pages/page';

const Home = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <Router>
        <Page>
          <Switch>
            <Route exact path="/">
              <Campaign />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Page>
      </Router>
    );
  }

  return (
    <Page>
      <Login />
    </Page>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.user && state.auth.user.email,
});


export default connect(mapStateToProps)(Home);
