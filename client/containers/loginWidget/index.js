import React, { useState } from 'react';
import { connect } from 'react-redux';

import Widget from '../../components/widget';

import { login } from '../../actions/authActions';
import { Form, Input } from '../../components/basics';
import Button from '../../components/basics/button';

const LoginWidget = ({ onLoginUser }) => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const updateInput = updateStateFunction => (event) => {
    updateStateFunction(event.target.value);
  };
  const submitLoginForm = () => {
    onLoginUser({ email, password });
  };

  return (
    <Widget title="Login" size="medium">
      <Form name="login-form">
        <Input
          labelText="Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={updateInput(changeEmail)}
          formName="login-form"
          name="email"
        />
        <Input
          labelText="Password"
          type="password"
          placeholder="password"
          value={password}
          onChange={updateInput(changePassword)}
          formName="login-form"
          name="password"
        />
        <Button onClick={submitLoginForm}>Login</Button>
      </Form>
    </Widget>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onLoginUser: userDetails => dispatch(login(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginWidget);
