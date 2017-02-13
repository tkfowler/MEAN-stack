var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
var Category = mongoose.model('Category')
// Build out the methods in the friendsControllers below
function TopicsController(){
  this.index = function(req,res){
    Topic.find({}).populate('user').exec(function(err, topics){
      if(err){
        res.json(err)
      }else{
        res.json(topics);
      }
    });
  };
  this.create = function(req,res){
    User.findOne({username: req.params.id}, function(err, user){
      var topic = new Topic(req.body)
      topic.user = user._id;
      topic.save(function(err, topics){
        if(err){
          res.json(err)
        }else{
          user.topics.push(topic);
          user.save(function(err){
            if(err){
              console.log('err');
            }else{
              // res.redirect('/topics') //
              res.json(topics)
            }
          });
        }
      })
    });
  };
  this.category = function(req, res){
    Category.find({}, function(err, category){
      if(err){
        res.json(err)
      }else{
        res.json(category)
      }
    })
  }
  this.show = function(req,res){
    Topic.findOne({_id:req.params.id}).populate('user').exec(function(err, topics){
      if(err){
        res.json(err);
      }else{
        res.json(topics);
      }
    })
  };
}
module.exports = new TopicsController(); // what does this export?
