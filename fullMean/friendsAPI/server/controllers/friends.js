console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
var mongoose = require('mongoose')
var Friend = mongoose.model('Friend')
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    //your code here
    Friend.find({}, function(err, friends){
      res.json(friends);
    })
  };
  this.create = function(req,res){
    //your code here
    var friend = new Friend(req.body)
    friend.save(function(err, friend){
      if(err){
        console.log('error');
      }else{
        res.json(friend);
      }
    })
  };
  this.update = function(req,res){
    //your code here
    Friend.update({_id:req.params.id}, {first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age}, function(err, friends){
      res.json(friend);
    })
  };
  this.delete = function(req,res){
    //your code here
    Dog.remove({_id:req.params.id}, function(err, friends){
      res.json(friends);
    })
  };
  this.show = function(req,res){
    //your code here
    Friend.findOne({_id:req.params.id}, function(err, friend){
      res.json(friend);
    })
  };
}
module.exports = new FriendsController(); // what does this export?
