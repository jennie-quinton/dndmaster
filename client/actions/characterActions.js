const getCharacters = () => dispatch => dispatch({
  type: 'GET_CHARACTERS',
  query: `{
    characters {
      id, name, class, race
    }
  }`,
});

export {
  getCharacters,
};
