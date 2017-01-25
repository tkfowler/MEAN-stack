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
    friend.save(function(err, friends){
      if(err){
        console.log('error');
      }else{
        res.json(friends);
      }
    })
  };
  this.update = function(req,res){
    //your code here
    console.log(req.body);
    console.log(req.params.id);
    var friend = Friend.findOne({_id: req.params.id}, function(err, friends){
      if(err){
        console.log('error');
      }else{
      friend.first_name = req.body.first_name;
      friend.last_name = req.body.last_name;
      friend.birthday = req.body.birthday;
      res.json(friends);
      }
    });
  };
  this.delete = function(req,res){
    //your code here
    Friend.remove({_id:req.params.id}, function(err, friends){
      res.json(friends);
    })
  };
  this.show = function(req,res){
    //your code here
    Friend.findOne({_id:req.params.id}, function(err, friends){
      res.json(friends);
    })
  };
}
module.exports = new FriendsController(); // what does this export?
