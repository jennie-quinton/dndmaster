const intialState = {
  characters: [],
};

const characterReducer = (state = intialState, action) => {
  const newAction = { ...action };

  switch (action.type) {
    case 'CREATE_CHARACTER_SUCCESS': {
      return {
        ...state,
        characters: [
          ...state.characters,
          newAction.data,
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default characterReducer;
