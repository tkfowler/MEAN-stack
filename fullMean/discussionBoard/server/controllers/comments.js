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
                    res.json(err);
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
}
module.exports = new CommentsController();
