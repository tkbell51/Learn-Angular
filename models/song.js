const mongoose = require('mongoose');
const User = require('./user')

var Schema = mongoose.Schema;

const songSchema = new Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true},
  keySignature: {type: String, required: true},
  group: {type: String}, //the group you play the song for
  url: {type: String}, //youtube url
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

songSchema.post('remove', function(song){
  User.findById(song.user,(err, user)=>{
    user.songs.pull(song._id);
    user.save();
  });
});


module.exports = mongoose.model("Song", songSchema);