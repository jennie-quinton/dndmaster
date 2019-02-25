const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String
});

mongoose.model('characters', characterSchema);
