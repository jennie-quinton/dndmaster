const graphql = require('graphql');
const graphqlIsoDate = require('graphql-iso-date');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLEnumType,
} = graphql;
const { GraphQLDateTime } = graphqlIsoDate;
const CharacterController = require('../controllers/CharacterController');
const { TYPES: CLASS_TYPES } = require('./class');
const { TYPES: RACE_TYPES } = require('./race');

const RaceEnumType = new GraphQLEnumType({
  name: 'RaceEnum',
  description: `Every character belongs to a race,
    one of the many humanoid species in D&D.
    The most common player character races are dwarves,
    elves, halflings, and humans.
    Your character’s race grants particular racial traits,
    such as special senses.`,
  values: RACE_TYPES.map(({ value }) => value).reduce((object, item) => {
    object[item] = { value: item };

    return object;
  }, {}),
});

const ClassEnumType = new GraphQLEnumType({
  name: 'ClassEnum',
  description: `Every adventurer is a member of a character class.
    Class broadly describes a character’s vocation special
    talents, and the tactics the character is most likely
    to employ when exploring a dungeon, fighting monsters,
    or engaging in a tense negotiation. Your character receives
    many benefits from your choice of class.`,
  values: CLASS_TYPES.map(({ value }) => value).reduce((object, item) => {
    object[item] = { value: item };

    return object;
  }, {}),
});

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    race: { type: RaceEnumType },
    class: { type: ClassEnumType },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
});

const queries = {
  characters: {
    type: new GraphQLList(CharacterType),
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
      race: { type: new GraphQLNonNull(RaceEnumType) },
      class: { type: new GraphQLNonNull(ClassEnumType) },
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
