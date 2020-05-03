const mongoose = require('mongoose');
const Character = mongoose.model('characters');

module.exports = {
  getAllByUserId: (userId) => {
    return Character.find({ _user: userId });
  },
  create: ({ name, race, className }, userId) => {
    const character = new Character({
      name,
      race,
      class: className,
      _user: userId,
    });

    return character.save();
  },
  remove: (characterId, userId) => {
    return Character.findOneAndRemove({ _id: characterId, _user: userId });
  },
};
