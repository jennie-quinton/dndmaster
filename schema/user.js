const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const UserController = require('../controllers/UserController');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
  }),
});

const queries = {
  user: {
    type: UserType,
    resolve(parentValue, args, req) {
      return UserController.getById(req.user.id);
    },
  },
};

module.exports = { queries };
