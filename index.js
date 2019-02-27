const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('./models/Character');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const server = express();

server.use(bodyParser.json());

require('./routes/characterRoutes')(server);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app
    .prepare()
    .then(() => {
      // Next will serve up all the assets
      server.get('*', (req, res) => handle(req, res));
      server.listen(PORT, () => {
        console.log(`Listening on port`, PORT);
      });
    })
    .catch(error => {
      console.error(error.stack);
      process.exit(1);
    });
} else {
  server.listen(PORT, () => {
    console.log(`Dev environment listening on port`, PORT);
  });
}
