/** GraphQl */
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphql;

/** Graph queries and mutations */
const {
  queries: characterQueries,
  mutations: characterMutations,
} = require('./character');
const { queries: userQueries } = require('./user');
const { queries: raceQueries } = require('./race');
const { queries: classQueries } = require('./class');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...characterMutations,
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...characterQueries,
    ...userQueries,
    ...raceQueries,
    ...classQueries,
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation });
