console.log('user model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var Schema = mongoose.Schema;
var topicSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
}, {timestamps: true})
// Retrieve Schema called 'Friend' and store it to variable Friend
var Topic = mongoose.model('Topic', topicSchema)
