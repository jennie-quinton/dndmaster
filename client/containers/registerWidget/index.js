import React, { useState } from 'react';
import { connect } from 'react-redux';

import Widget from '../../components/widget';

import { registerUser } from '../../actions/authActions';
import { Form, Input } from '../../components/basics';
import Button from '../../components/basics/button';

const RegisterWidget = () => {
  const [name, changeName] = useState('');
  const [password, changePassword] = useState('');
  const [confirmPassword, changeConfirmPassword] = useState('');

  return (
    <Widget title="Register" size="medium">
      <Form name="register-form">
        <Input
          labelText="Email"
          type="email"
          placeholder="Email"
          value={name}
          onChange={changeName}
          formName="register-form"
        />
        <Input
          labelText="Password"
          type="password"
          placeholder="password"
          value={password}
          onChange={changePassword}
          formName="register-form"
        />
        <Input
          labelText="Confirm password"
          type="password"
          placeholder="password"
          value={confirmPassword}
          onChange={changeConfirmPassword}
          formName="register-form"
        />
        <Button>Register</Button>
      </Form>
    </Widget>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  registerUser: userDetails => dispatch(registerUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWidget);
