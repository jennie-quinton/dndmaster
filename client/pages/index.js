import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Campaign from '../containers/campaign';
import Login from '../containers/login';
import { getUser } from '../actions/authActions';
import Page from '../components/page';

const Home = ({ user, onGetUser }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onGetUser().then(() => {
      setLoading(false);
    });
  });

  if (loading) {
    return <p>Loading</p>;
  }

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

const mapDispatchToProps = dispatch => ({
  onGetUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
