import CharacterType from './schemas/characterSchema';

const addCharacter = () => dispatch => dispatch({
  type: 'CREATE_CHARACTER',
  schemaType: CharacterType,
  query: '{ id, name, race, class }',
});

export {
  addCharacter,
};
