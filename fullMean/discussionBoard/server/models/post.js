console.log('user model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var Schema = mongoose.Schema;
var postSchema = new mongoose.Schema({
  text: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
}, {timestamps: true})
// Retrieve Schema called 'Friend' and store it to variable Friend
var Post = mongoose.model('Post', postSchema)
