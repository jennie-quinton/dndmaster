/** GraphQl */
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphql;

/** Graph queries and mutations */
const {
  queries: characterQueries,
  mutations: characterMutations
} = require('./character');
const { queries: userQueries, mutations: userMutations } = require('./user');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...characterMutations,
    ...userMutations
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...characterQueries,
    ...userQueries
  }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation });
