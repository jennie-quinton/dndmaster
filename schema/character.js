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

const RaceEnumType = new GraphQLEnumType({
  name: 'Race',
  description: `Every character belongs to a race,
    one of the many humanoid species in D&D.
    The most common player character races are dwarves,
    elves, halflings, and humans.
    Your character’s race grants particular racial traits,
    such as special senses.`,
  values: {
    dragonborn: { value: 'dragonborn' },
    dwarf: { value: 'dwarf' },
    elf: { value: 'elf' },
    gnome: { value: 'gnome' },
    halfElf: { value: 'halfElf' },
    halfling: { value: 'halfling' },
    halfOrc: { value: 'halfOrc' },
    human: { value: 'human' },
    tiefling: { value: 'tiefling' },
  },
});

const ClassEnumType = new GraphQLEnumType({
  name: 'Class',
  description: `Every adventurer is a member of a character class.
    Class broadly describes a character’s vocation special
    talents, and the tactics the character is most likely
    to employ when exploring a dungeon, fighting monsters,
    or engaging in a tense negotiation. Your character receives
    many benefits from your choice of class.`,
  values: {
    barbarian: { value: 'barbarian' },
    bard: { value: 'bard' },
    cleric: { value: 'cleric' },
    druid: { value: 'druid' },
    fighter: { value: 'fighter' },
    monk: { value: 'monk' },
    paladin: { value: 'paladin' },
    ranger: { value: 'ranger' },
    rogue: { value: 'rogue' },
    sorcerer: { value: 'sorcerer' },
    warlock: { value: 'warlock' },
    wizard: { value: 'wizard' },
  },
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
