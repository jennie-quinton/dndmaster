import React, { useState } from 'react';
import { connect } from 'react-redux';

import Widget from '../../components/widget';

import { registerUser } from '../../actions/authActions';
import { Form, Input } from '../../components/basics';
import Button from '../../components/basics/button';

const RegisterWidget = ({ onRegisterUser }) => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [confirmPassword, changeConfirmPassword] = useState('');
  const updateInput = updateStateFunction => (event) => {
    updateStateFunction(event.target.value);
  };
  const submitRegistrationForm = () => {
    if (password === confirmPassword) {
      onRegisterUser({ email, password });
    }
  };

  return (
    <Widget title="Register" size="medium">
      <Form name="register-form">
        <Input
          labelText="Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={updateInput(changeEmail)}
          formName="register-form"
          name="email"
        />
        <Input
          labelText="Password"
          type="password"
          placeholder="password"
          value={password}
          onChange={updateInput(changePassword)}
          formName="register-form"
          name="password"
        />
        <Input
          labelText="Confirm password"
          type="password"
          placeholder="password"
          value={confirmPassword}
          onChange={updateInput(changeConfirmPassword)}
          formName="register-form"
          name="confirm-password"
        />
        <Button onClick={submitRegistrationForm}>Register</Button>
      </Form>
    </Widget>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onRegisterUser: userDetails => dispatch(registerUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWidget);
