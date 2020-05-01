const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    race: {
      type: String,
      required: true,
      enum: [
        'dragonborn',
        'dwarf',
        'elf',
        'gnome',
        'half-elf',
        'halfling',
        'half-orc',
        'human',
        'tiefling',
      ],
    },
    class: {
      type: String,
      required: true,
      enum: [
        'barbarian',
        'bard',
        'cleric',
        'druid',
        'fighter',
        'monk',
        'paladin',
        'ranger',
        'rogue',
        'sorcerer',
        'warlock',
        'wizard',
      ],
    },
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

mongoose.model('characters', characterSchema);
