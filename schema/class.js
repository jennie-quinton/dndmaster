const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const ClassType = new GraphQLObjectType({
  name: 'Class',
  fields: () => ({
    name: { type: GraphQLString },
    value: { type: GraphQLString },
  }),
});

const queries = {
  classes: {
    type: new GraphQLList(ClassType),
    resolve(parentValue, args, req) {
      return [
        {
          name: 'Barbarian',
          value: 'barbarian',
        },
        {
          name: 'Bard',
          value: 'bard',
        },
        {
          name: 'Cleric',
          value: 'cleric',
        },
        {
          name: 'Barbarian',
          value: 'barbarian',
        },
        {
          name: 'Druid',
          value: 'druid',
        },
        {
          name: 'Barbarian',
          value: 'barbarian',
        },
        {
          name: 'Fighter',
          value: 'fighter',
        },
        {
          name: 'Monk',
          value: 'monk',
        },
        {
          name: 'Paladin',
          value: 'paladin',
        },
        {
          name: 'Ranger',
          value: 'ranger',
        },
        {
          name: 'Rogue',
          value: 'rogue',
        },
        {
          name: 'Sorcerer',
          value: 'sorcerer',
        },
        {
          name: 'Warlock',
          value: 'warlock',
        },
        {
          name: 'Wizard',
          value: 'wizard',
        },
      ];
    },
  },
};

module.exports = { queries };
