var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var Customer = mongoose.model('Customer')
// Build out the methods in the friendsControllers below
function CustomersController(){
  this.index = function(req,res){
    Customer.find({}, function(err, customers){
      res.json(customers);
    })
  };
  this.create = function(req,res){
    var customer = new Customer(req.body)
    customer.save(function(err, customers){
      if(err){
        res.json(err);
      }else{
        res.json(customers);
      }
    })
  };
  this.update = function(req,res){
    Customer.update({_id: req.params.id}, req.body, function(err, customers){
      if(err){
        res.json(err);
      }else{
        res.json(customers);
      }
    })
  };
  this.delete = function(req,res){
    Customer.remove({_id:req.params.id}, function(err, customers){
      if(err){
        res.json(err)
      }else{
        res.json(customers);
      }
    })
  };
  this.show = function(req,res){
    Customer.findOne({_id:req.params.id}, function(err, customers){
      if(err){
        res.json(err);
      }else{
        res.json(customers);
      }
    })
  };
}
module.exports = new CustomersController(); // what does this export?
