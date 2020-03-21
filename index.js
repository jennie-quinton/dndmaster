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
  useUnifiedTopology: true
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
    graphiql: true
  })
);

// Enable pre-flight request for all routes
app.options('*', cors());

/** Set up custom routes */
const auth = require('./routes/auth');

app.use('/auth', auth);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, main.css file
  app.use(express.static('client/dist'));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('LISTENING TO PORT:', PORT);
