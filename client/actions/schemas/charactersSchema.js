import {
  GraphQLObjectType, GraphQLList,
} from 'graphql';

import CharacterType from './characterSchema';

const CharactersType = new GraphQLObjectType({
  name: 'Characters',
  fields: () => ({
    characters: { type: new GraphQLList(CharacterType) },
  }),
});

export default CharactersType;
