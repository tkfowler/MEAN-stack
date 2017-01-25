console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var friendSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  birthday: {type: Date, required: true}
}, {timestamps: true})
// Retrieve Schema called 'Friend' and store it to variable Friend
var Friend = mongoose.model('Friend', friendSchema)
