const login = () => dispatch => dispatch({
  type: 'LOGIN',
  endpoint: '/auth/login',
  method: 'POST',
});

const registerUser = () => dispatch => dispatch({
  type: 'REGISTER_USER',
  endpoint: '/auth/register',
  method: 'POST',
  body: [
    {
      key: 'email',
      value: 'jordan@test.com',
      type: 'text',
    },
    {
      key: 'password',
      value: 'password123',
      type: 'text',
    },
  ],
});

const getUser = () => dispatch => dispatch({
  type: 'GET_USER',
  endpoint: '/api/user',
});

const logout = () => dispatch => dispatch({
  type: 'LOGOUT',
  endpoint: '/auth/logout',
});

export {
  login, getUser, logout, registerUser,
};
