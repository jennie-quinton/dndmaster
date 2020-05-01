const graphql = require('graphql');
const graphqlIsoDate = require('graphql-iso-date');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = graphql;
const { GraphQLDateTime } = graphqlIsoDate;

const mongoose = require('mongoose');
const Character = mongoose.model('characters');

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    race: { type: GraphQLString },
    class: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
});

const CharacterList = new GraphQLList(CharacterType);

const queries = {
  characters: {
    type: CharacterList,
    args: {},
    resolve(parentValue, args, request) {
      return Character.find({ _user: request.user.id });
    },
  },
};

const mutations = {
  addCharacter: {
    type: CharacterType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      race: { type: new GraphQLNonNull(GraphQLString) },
      class: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parentValue, { name, race, class: className }, req) {
      const character = new Character({
        name,
        race,
        class: className,
        _user: req.user.id,
      });

      return character.save();
    },
  },
};

module.exports = { mutations, queries };
