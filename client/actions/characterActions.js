import CharacterType from './schemas/characterSchema';
import CharactersType from './schemas/charactersSchema';

const getCharacters = () => dispatch => dispatch({
  type: 'GET_CHARACTERS',
  schemaType: CharactersType,
  query: `{
    characters {
      id, name, class, race
    }
  }`,
});

export {
  getCharacters,
};
