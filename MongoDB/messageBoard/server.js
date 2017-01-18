var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/messageboard');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4},
  text: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});
var CommentSchema = new mongoose.Schema({
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  name: {type: String, required: true, minlength: 4},
  text: {type: String, required: true}
}, {timestamps: true});
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', function(req, res){
  Post.find({}).populate('comments').exec(function(err, posts){
    if(err){
      res.render('index', {errors: err});
    }else{
      res.render('index', {posts: posts})
    }
  })
})

app.post('/post', function(req, res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      res.render('index', {title: 'you have errors!', errors: post.errors})
    }else{
      res.redirect('/');
    }
  });
})

app.post('/post/:id', function(req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
    var comment = new Comment(req.body);
    comment._post = post._id;
    comment.save(function(err){
      post.comments.push(comment);
      post.save(function(err){
        if(err){
          console.log('error');
        }else{
          res.redirect('/')
        }
      })
    })
  })
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
