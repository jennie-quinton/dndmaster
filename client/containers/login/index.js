import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/authActions';

const loginContainer = ({ requestLogin }) => {
  requestLogin();
  return <p>Loading</p>;
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  requestLogin: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(loginContainer);
