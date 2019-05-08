const login = () => {
  window.location.href = '/auth/google';
};

const getUser = () => (dispatch) => {
  dispatch({
    type: 'GET_USER',
    endpoint: '/api/user',
  });
};

const logout = () => (dispatch) => {
  dispatch({
    type: 'LOGOUT',
    endpoint: '/auth/logout',
  });
};

export { login, getUser, logout };
