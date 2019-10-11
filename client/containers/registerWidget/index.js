import React, { useState } from 'react';
import { connect } from 'react-redux';

import Widget from '../../components/widget';

import { registerUser } from '../../actions/authActions';
import { Form, Input, Layout } from '../../components/basics';
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
        <Layout spacing={['8px', 0, 0, 0]}>
          <Input
            labelText="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={updateInput(changeEmail)}
            formName="register-form"
            name="email"
          />
        </Layout>
        <Layout spacing={['8px', 0, 0, 0]}>
          <Input
            labelText="Password"
            type="password"
            placeholder="password"
            value={password}
            onChange={updateInput(changePassword)}
            formName="register-form"
            name="password"
          />
        </Layout>
        <Layout spacing={['8px', 0, 0, 0]}>
          <Input
            labelText="Confirm password"
            type="password"
            placeholder="password"
            value={confirmPassword}
            onChange={updateInput(changeConfirmPassword)}
            formName="register-form"
            name="confirm-password"
          />
        </Layout>
        <Layout spacing={['16px', 0, 0, 0]}>
          <Button onClick={submitRegistrationForm}>Register</Button>
        </Layout>
      </Form>
    </Widget>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onRegisterUser: userDetails => dispatch(registerUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWidget);
