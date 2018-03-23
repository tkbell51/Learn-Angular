const mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }]
});

userSchema.plugin(mongooseUniqueValidator);

const User = mongoose.model('User', userSchema);
module.exports = User;