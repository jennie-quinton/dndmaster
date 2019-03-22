import characterSchema from './schemas/characterSchema';

const addCharacter = () => dispatch => dispatch({
  type: 'CREATE_CHARACTER',
  schema: characterSchema,
  query: '{ name, race, class }',
});

export {
  addCharacter,
};
