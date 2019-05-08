const intialState = {
  user: null,
};

const authReducer = (state = intialState, action) => {
  const newAction = { ...action };

  switch (action.type) {
    case 'GET_USER_SUCCESS': {
      return {
        ...state,
        user: {
          name: 'Bob',
        },
      };
    }
    case 'GET_USER_FAILURE': {
      return {
        ...state,
        user: newAction.error.statusText,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
