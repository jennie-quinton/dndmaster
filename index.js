const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

/** Mongoose models */
require('./models/Character');
require('./models/User');

/** Express services */
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

/** Set up custom routes */
const auth = require('./routes/auth');
const user = require('./routes/user');
const graph = require('./routes/graph');

app.use('/auth', auth);
app.use('/api', passport.authenticate('jwt', { session: false }), user);
app.use('/api', passport.authenticate('jwt', { session: false }), graph);

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
