import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: () => ({
    id: { type: GraphQLInt },
    initiative: { type: GraphQLInt },
    name: { type: GraphQLString },
    race: { type: GraphQLString },
    class: { type: GraphQLString },
  }),
});

export default CharacterType;
