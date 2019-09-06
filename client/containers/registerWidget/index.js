import React, { useState } from 'react';
import { connect } from 'react-redux';

import Widget from '../../components/widget';

import { registerUser } from '../../actions/authActions';
import { Form, Input } from '../../components/basics';

const RegisterWidget = () => {
  const [name, changeName] = useState('');

  return (
    <Widget title="Register" size="medium">
      <Form name="register-form">
        <Input labelText="Name" placeholder="Name" value={name} onChange={changeName} formName="register-form" />
      </Form>
    </Widget>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  registerUser: userDetails => dispatch(registerUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWidget);
