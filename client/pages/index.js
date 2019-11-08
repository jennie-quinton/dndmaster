import React from 'react';
import { connect } from 'react-redux';

import Campaign from '../containers/campaign';
import Login from '../containers/login';
import Page from '../components/page';

const Home = ({ user }) => {
  if (true) {
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
