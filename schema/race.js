const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const RaceType = new GraphQLObjectType({
  name: 'Race',
  fields: () => ({
    name: { type: GraphQLString },
    value: { type: GraphQLString },
  }),
});

const queries = {
  races: {
    type: new GraphQLList(RaceType),
    resolve(parentValue, args, req) {
      return [
        {
          name: 'Dragonborn',
          value: 'dragonborn',
        },
        {
          name: 'Dwarf',
          value: 'dwarf',
        },
        {
          name: 'Elf',
          value: 'elf',
        },
        {
          name: 'Gnome',
          value: 'gnome',
        },
        {
          name: 'Half-Elf',
          value: 'halfElf',
        },
        {
          name: 'Halfling',
          value: 'halfling',
        },
        {
          name: 'Half-Orc',
          value: 'halfOrc',
        },
        {
          name: 'Human',
          value: 'human',
        },
        {
          name: 'Tiefling',
          value: 'tiefling',
        },
      ];
    },
  },
};

module.exports = { queries };
