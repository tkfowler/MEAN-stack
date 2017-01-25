console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models

var friendSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
})

var Friend = mongoose.model('Friend', friendSchema)
