import {buildSchema} from 'graphql';

const schema = buildSchema(`
  type Query {
    name: String,
    race: String,
    class: String,
  }
`);

export default schema;
