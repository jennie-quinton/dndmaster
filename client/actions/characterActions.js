import characterSchema from './schemas/characterSchema'

const addCharacter = () => (dispatch) => {
  return dispatch({
    type: 'CREATE_CHARACTER',
    schema: characterSchema,
    query: '{ name, race, class }'
  });
}

export {
  addCharacter,
}