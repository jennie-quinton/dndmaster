const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String,
  initiative: Number,
  race: String,
  class: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateCreated: Date
});

mongoose.model('characters', characterSchema);
