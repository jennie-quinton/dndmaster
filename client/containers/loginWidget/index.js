import React, { useState } from 'react';
import { connect } from 'react-redux';

import Widget from '../../components/widget';

import { login } from '../../actions/authActions';
import {
  Form, Input, Layout, Button,
} from '../../components/basics';

import styles from './styles.scss';

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
    <Widget title="Login" centerTitle minWidth="200px">
      <Form name="login-form">
        <Layout spacing={['8px', 0, 0, 0]}>
          <Input
            ariaLabel="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={updateInput(changeEmail)}
            formName="login-form"
            name="email"
            fullWidth
          />
        </Layout>
        <Layout spacing={['8px', 0, 0, 0]}>
          <Input
            ariaLabel="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updateInput(changePassword)}
            formName="login-form"
            name="password"
            fullWidth
          />
        </Layout>
        <Layout spacing={['16px', 0, 0, 0]} className={styles.submitButton}>
          <Button onClick={submitLoginForm}>Login</Button>
        </Layout>
      </Form>
    </Widget>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onLoginUser: userDetails => dispatch(login(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginWidget);
