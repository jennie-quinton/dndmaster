import React from 'react';
import { connect } from 'react-redux';

import Campaign from '../pages/campaign';
import Login from '../pages/login';
import Page from '../pages/page';

const Home = ({ user }) => {
  if (user && user.email) {
    return (
      <Page>
        <Campaign />
      </Page>
    );
  }

  return (
    <Page>
      <Login />
    </Page>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});


export default connect(mapStateToProps)(Home);
