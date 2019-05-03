const login = () => {
  window.location.href = '/auth/google';
};

const getUser = () => (dispatch) => {
  dispatch({
    type: 'GET_USER',
    endpoint: '/api/user',
  });
};

export { login, getUser };
