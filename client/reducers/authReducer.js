const intialState = {
  user: [],
};

const authReducer = (state = intialState, action) => {
  const newAction = { ...action };

  switch (action.type) {
    case 'GET_USER_SUCCESS': {
      console.log(newAction);
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
