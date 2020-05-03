const graphql = require('graphql');
const graphqlIsoDate = require('graphql-iso-date');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = graphql;
const { GraphQLDateTime } = graphqlIsoDate;
const CharacterController = require('../controllers/CharacterController');

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    race: { type: GraphQLString },
    class: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
});

const queries = {
  characters: {
    type: new GraphQLList(CharacterType),
    args: {},
    resolve(parentValue, args, req) {
      return CharacterController.getAllByUserId(req.user.id);
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
      return CharacterController.create({ name, race, className }, req.user.id);
    },
  },
  removeCharacter: {
    type: CharacterType,
    args: { id: { type: GraphQLID } },
    resolve(parentValue, { id }, req) {
      return CharacterController.remove(id, req.user.id);
    },
  },
};

module.exports = { mutations, queries };
