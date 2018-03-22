const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true},
  keySignature: {type: String, required: true},
  group: {type: String}, //the group you play the song for
  url: {type: String}, //youtube url
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;