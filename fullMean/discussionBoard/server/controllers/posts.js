var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var Post = mongoose.model('Post')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
// Build out the methods in the friendsControllers below
function PostsController(){
  this.index = function(req,res){
    console.log(req.params);
    Post.find({topic: req.params.id}).populate([{path: 'user', model: 'User'}, {path: 'topic', model: 'Topic'}]).exec(function(err, posts){
      if(err){
        res.json(err)
      }else{
        res.json(posts);
      }
    });
  };
  this.create = function(req,res){
    User.findOne({username: req.params.id}, function(err, user){
      if(err){
        res.json(err)
      }else{
        Topic.findOne({_id: req.body.topic.id}, function(err, topic){
          if(err){
            res.json(err)
          }else{
            var post = new Post({text: req.body.text})
            post.user = user._id;
            post.topic = topic._id;
            post.save(function(err, posts){
              if(err){
                res.json(err)
              }else{
                user.posts.push(post);
                user.save(function(err){
                  if(err){
                    console.log('err');
                  }else{
                    topic.posts.push(post);
                    topic.save(function(err){
                      if(err){
                        res.json(err)
                      }else{
                        // res.redirect('/posts') //
                        res.json(posts)
                      }
                    })
                  }
                });
              }
            })
          }
        })
      }
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
    Post.findOne({_id:req.params.id}).populate('user').exec(function(err, posts){
      if(err){
        res.json(err);
      }else{
        res.json(posts);
      }
    })
  };
  // this.update = function(req,res){
  //   User.update({_id: req.params.id}, req.body, function(err, users){
  //     if(err){
  //       res.json(err);
  //     }else{
  //       res.json(users);
  //     }
  //   })
  // };
  // this.delete = function(req,res){
  //   User.remove({_id:req.params.id}, function(err, users){
  //     if(err){
  //       res.json(err)
  //     }else{
  //       res.json(users);
  //     }
  //   })
  // };
}
module.exports = new PostsController(); // what does this export?
