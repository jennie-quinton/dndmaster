/** GraphQl */
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphql;

/** Graph queries and mutations */
const {
  queries: characterQueries,
  mutations: characterMutations,
} = require('./character');
const { queries: userQueries } = require('./user');

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
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation });
