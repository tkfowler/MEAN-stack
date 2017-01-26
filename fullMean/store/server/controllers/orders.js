var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var Order = mongoose.model('Order')
// Build out the methods in the friendsControllers below
function OrdersController(){
  this.index = function(req,res){
    Order.find({}, function(err, orders){
      res.json(orders);
    })
  };
  this.create = function(req,res){
    var order = new Order(req.body)
    order.save(function(err, orders){
      if(err){
        res.json(err);
      }else{
        res.json(orders);
      }
    })
  };
  this.update = function(req,res){
    Order.update({_id: req.params.id}, req.body, function(err, orders){
      if(err){
        res.json(err);
      }else{
        res.json(orders);
      }
    })
  };
  this.delete = function(req,res){
    Order.remove({_id:req.params.id}, function(err, orders){
      if(err){
        res.json(err)
      }else{
        res.json(orders);
      }
    })
  };
  this.show = function(req,res){
    Order.findOne({_id:req.params.id}, function(err, orders){
      if(err){
        res.json(err);
      }else{
        res.json(orders);
      }
    })
  };
}
module.exports = new OrdersController(); // what does this export?
