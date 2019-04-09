const graphql = require('graphql');
const graphqlIsoDate = require('graphql-iso-date')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = graphql;
const { GraphQLDateTime } = graphqlIsoDate


const mongoose = require('mongoose');
const Character = mongoose.model('characters');

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    initiative: { type: GraphQLInt },
    race: { type: GraphQLString },
    class: { type: GraphQLString },
    dateCreated: { type: GraphQLDateTime }
  })
});

const CharacterList = new GraphQLList(CharacterType);

const queries = {
  characters: {
    type: CharacterList,
    args: {},
    resolve(parentValue, args, request) {    
      return Character.find({  _user: request.user.id });
    }
  }
};

const mutations = {
  addCharacter: {
    type: CharacterType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      initiative: { type: new GraphQLNonNull(GraphQLInt) },
      race: { type: new GraphQLNonNull(GraphQLString) },
      class: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(
      parentValue,
      { name, initiative, race, class: className },
      request
    ) {
      const character = new Character({
        name,
        initiative,
        race,
        class: className,
        _user: request.user.id,
        dateCreated: Date.now()
      });

      return character.save();
    }
  }
};

module.exports = { mutations, queries };
