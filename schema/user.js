const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const mongoose = require('mongoose');
const User = mongoose.model('users');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString }
  })
});

const queries = {
  user: {
    type: UserType,
    args: {},
    resolve(parentValue, args, request) {
      return User.findById(request.user.id);
    }
  }
};

const mutations = {};

module.exports = { mutations, queries };
