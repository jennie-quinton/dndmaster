import React, { useState } from 'react';
import { connect } from 'react-redux';

import Widget from '../../components/widget';

import { registerUser } from '../../actions/authActions';
import { Form, Input, Layout } from '../../components/basics';
import Button from '../../components/basics/button';

import styles from './styles.scss';

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
    <Widget title="Register" centerTitle>
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
            inline
            fullWidth
          />
        </Layout>
        <Layout spacing={['8px', 0, 0, 0]}>
          <Input
            labelText="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updateInput(changePassword)}
            formName="register-form"
            name="password"
            inline
            fullWidth
          />
        </Layout>
        <Layout spacing={['8px', 0, 0, 0]}>
          <Input
            labelText="Confirm password"
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={updateInput(changeConfirmPassword)}
            formName="register-form"
            name="confirm-password"
            inline
            fullWidth
          />
        </Layout>
        <Layout spacing={['48px', 0, 0, 0]} className={styles.submitButton}>
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
