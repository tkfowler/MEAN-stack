console.log('comment model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var Schema = mongoose.Schema;
var commentSchema = new mongoose.Schema({
  text: {type: String, required: true},
  upVote: {type: Number, required: true},
  downVote: {type: Number, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  post: {type: Schema.Types.ObjectId, ref: 'Post'},
}, {timestamps: true})
// Retrieve Schema called 'Friend' and store it to variable Friend
var Comment = mongoose.model('Comment', commentSchema)
