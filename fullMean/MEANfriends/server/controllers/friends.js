var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var Friend = mongoose.model('Friend')
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends){
      res.json(friends);
    })
  };
  this.create = function(req,res){
    //your code here
    var friend = new Friend(req.body)
    friend.save(function(err, friends){
      if(err){
        res.json(err);
      }else{
        res.json(friends);
      }
    })
  };
  this.update = function(req,res){
    Friend.update({_id: req.params.id}, req.body, function(err, friends){
      if(err){
        res.json(err);
      }else{
        res.json(friends);
      }
    })
  };
  this.delete = function(req,res){
    Friend.remove({_id:req.params.id}, function(err, friends){
      if(err){
        res.json(err)
      }else{
        res.json(friends);
      }
    })
  };
  this.show = function(req,res){
    Friend.findOne({_id:req.params.id}, function(err, friends){
      if(err){
        res.json(err);
      }else{
        res.json(friends);
      }
    })
  };
}
module.exports = new FriendsController(); // what does this export?
