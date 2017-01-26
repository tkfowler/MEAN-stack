var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var Product = mongoose.model('Product')
// Build out the methods in the friendsControllers below
function ProductsController(){
  this.index = function(req,res){
    Product.find({}, function(err, products){
      res.json(products);
    })
  };
  this.create = function(req,res){
    var product = new Product(req.body)
    product.save(function(err, products){
      if(err){
        res.json(err);
      }else{
        console.log(products);
        res.json(products);
      }
    })
  };
  this.update = function(req,res){
    Product.update({name: req.params.id}, {$set:{quantity: req.body.quantity}}, function(err, products){
      if(err){
        res.json(err);
      }else{
        res.json(products);
      }
    })
  };
  this.delete = function(req,res){
    Product.remove({_id:req.params.id}, function(err, products){
      if(err){
        res.json(err)
      }else{
        res.json(products);
      }
    })
  };
  this.show = function(req,res){
    Product.findOne({_id:req.params.id}, function(err, products){
      if(err){
        res.json(err);
      }else{
        res.json(products);
      }
    })
  };
}
module.exports = new ProductsController(); // what does this export?
