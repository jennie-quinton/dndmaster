import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/authActions';
import RegisterWidget from '../../containers/registerWidget';
import LoginWidget from '../../containers/loginWidget';
import WidgetsContainer from '../../containers/widgetsContainer';

const LoginPage = ({ requestLogin }) => (
  <WidgetsContainer center direction="column">
    <LoginWidget />
    <RegisterWidget />
  </WidgetsContainer>
);

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  requestLogin: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
