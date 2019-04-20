const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const expressGraphQL = require('express-graphql');

/** Mongoose models */
require('./models/Character');
require('./models/User');

/** Express services */
require('./services/passport');

/** Express middleware */
const requireLogin = require('./middlewares/requireLogin');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
const schema = require('./schema');

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  '/api/graphql',
  requireLogin,
  expressGraphQL({
    schema,
    graphiql: true
  })
);

/** Set up custom routes */
require('./routes/authRoutes')(app);

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
console.log('LISTENING TO PORT:', PORT);
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
