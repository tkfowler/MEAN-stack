var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')
var User = mongoose.model('User')
// Build out the methods in the friendsControllers below
function CommentsController(){
  this.index = function(req,res){
    Comment.find({post: req.params.id}).populate([{path: 'user', model: 'User'}, {path: 'post', model: 'Post'}]).exec(function(err, comments){
      if(err){
        res.json(err)
      }else{
        res.json(comments);
      }
    });
  };
  this.create = function(req,res){
    console.log(req.params);
    User.findOne({username: req.params.id}, function(err, user){
      if(err){
        res.json(err)
      }else{
        Post.findOne({_id: req.body.post.id}, function(err, post){
          if(err){
            res.json(err)
          }else{
            var comment = new Comment({text: req.body.text})
            comment.user = user._id;
            comment.post = post._id;
            comment.upVote = 0;
            comment.downVote = 0;
            comment.save(function(err, comments){
              if(err){
                res.json(err)
              }else{
                user.comments.push(comments);
                user.save(function(err){
                  if(err){
                    console.log('err');
                  }else{
                    post.comments.push(comments);
                    post.save(function(err){
                      if(err){
                        res.json(err)
                      }else{
                        // res.redirect('/posts') //
                        res.json(comments)
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
  // this.category = function(req, res){
  //   Category.find({}, function(err, category){
  //     if(err){
  //       res.json(err)
  //     }else{
  //       res.json(category)
  //     }
  //   })
  // }
  // this.show = function(req,res){
  //   Post.findOne({_id:req.params.id}).populate('user').exec(function(err, posts){
  //     if(err){
  //       res.json(err);
  //     }else{
  //       res.json(posts);
  //     }
  //   })
  // };
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
module.exports = new CommentsController(); // what does this export?
