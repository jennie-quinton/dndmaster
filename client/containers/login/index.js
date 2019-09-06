import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/authActions';
import RegisterWidget from '../registerWidget';
import WidgetsContainer from '../widgetsContainer';

const loginContainer = ({ requestLogin }) => (
  <WidgetsContainer>
    login
    <RegisterWidget />
  </WidgetsContainer>
);

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  requestLogin: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(loginContainer);
