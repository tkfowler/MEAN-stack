console.log('customer model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var customerSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
}, {timestamps: true})
// Retrieve Schema called 'Customer' and store it to variable Customer
var Customer = mongoose.model('Customer', customerSchema)
