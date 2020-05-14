const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const expressGraphQL = require('express-graphql');

/** Mongoose models */
require('./models/Character');
require('./models/User');

/** Express services */
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();
const schema = require('./schema');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  '/api/graphql',
  passport.authenticate('jwt', { session: false }),
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

if (process.env.NODE_ENV !== 'production') {
  app.use(
    '/graphql',
    passport.authenticate('basic', { session: false }),
    expressGraphQL({
      schema,
      graphiql: true,
    })
  );
}

// Enable pre-flight request for all routes
app.options('*', cors());

/** Set up custom routes */
const auth = require('./routes/auth');
const webhook = require('./routes/webhook');

app.use('/auth', auth);
app.use('/api/webhook', webhook);

const PORT = process.env.PORT || 5500;
app.listen(PORT);
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('LISTENING TO PORT:', PORT);
