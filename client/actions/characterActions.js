import CharacterType from './schemas/characterSchema';

const getCharacters = () => dispatch => dispatch({
  type: 'GET_CHARACTERS',
  schemaType: CharacterType,
  query: '{ id, name, race, class }',
});

export {
  getCharacters,
};
