console.log('product model');
var mongoose = require('mongoose');
// build your schema and add it to the mongoose.models
var productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  quantity: {type: Number, required: true}
}, {timestamps: true})
// Retrieve Schema called 'SchemaName' and store it to variable VarName
var Product = mongoose.model('Product', productSchema)
