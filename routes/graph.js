const expressGraphQL = require('express-graphql');
const schema = require('../schema');
const express = require('express');
const router = express.Router();

router.get(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = router;
