const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = {
  getById: (userId) => {
    return User.findById(userId);
  },
};
