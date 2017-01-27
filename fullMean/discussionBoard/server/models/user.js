console.log('user model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true})
// Retrieve Schema called 'Friend' and store it to variable Friend
var User = mongoose.model('User', userSchema)
