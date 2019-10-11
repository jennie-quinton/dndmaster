const intialState = {
  user: null,
};

const authReducer = (state = intialState, action) => {
  const newAction = { ...action };

  switch (action.type) {
    case 'GET_USER_SUCCESS':
    case 'LOGIN_SUCCESS':
    case 'REGISTER_USER_SUCCESS': {
      return {
        ...state,
        user: {
          email: newAction.payload.user.email,
        },
        token: newAction.payload.token,
      };
    }
    case 'REGISTER_USER_FAILURE':
    case 'GET_USER_FAILURE':
    case 'LOGIN_FAILURE': {
      return {
        ...state,
        user: null,
        error: newAction.error.statusText,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
