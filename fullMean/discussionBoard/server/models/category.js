console.log('category model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
// var Schema = mongoose.Schema;
var categorySchema = new mongoose.Schema({
  name: {type: String, required: true},
})
// Retrieve Schema called 'Friend' and store it to variable Friend
var Category = mongoose.model('Category', categorySchema)
