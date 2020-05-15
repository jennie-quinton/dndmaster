const mongoose = require('mongoose');
const { Schema } = mongoose;
const { TYPES: CLASS_TYPES } = require('../schema/class');
const { TYPES: RACE_TYPES } = require('../schema/race');

const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    race: {
      type: String,
      required: true,
      enum: RACE_TYPES.map(({ value }) => value),
    },
    class: {
      type: String,
      required: true,
      enum: CLASS_TYPES.map(({ value }) => value),
    },
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

mongoose.model('characters', characterSchema);
