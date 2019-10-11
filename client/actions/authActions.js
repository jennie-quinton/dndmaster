const login = ({ email, password }) => dispatch => dispatch({
  type: 'LOGIN',
  endpoint: '/auth/login',
  method: 'POST',
  body: {
    email,
    password,
  },
});

const registerUser = ({ email, password }) => dispatch => dispatch({
  type: 'REGISTER_USER',
  endpoint: '/auth/register',
  method: 'POST',
  body: {
    email,
    password,
  },
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
