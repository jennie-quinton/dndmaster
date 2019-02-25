const mongoose = require('mongoose');
const Character = mongoose.model('characters');

module.exports = app => {
  app.get('/api/character', async (req, res) => {
    const characters = await Character.find({});

    res.send(characters);
  });

  app.post('/api/character', async (req, res) => {
    const { name } = req.body;

    const character = new Character({
      name
    });

    try {
      await character.save();

      res.send({ success: true });
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
