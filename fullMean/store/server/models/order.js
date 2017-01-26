console.log('order model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var orderSchema = new mongoose.Schema({
  customer: {type: String, required: true},
  product: {type: String, required: true},
  quantity: {type: Number, required: true, min: [1, "Need a quantity"]}
}, {timestamps: true})
// Retrieve Schema called 'Friend' and store it to variable Friend
var Order = mongoose.model('Order', orderSchema)
