var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  User.find({}, function(err, users){
    if(err){
      console.log('error');
    }else{
    res.render('index', {user:users})
    }
  })
});

app.post('/users', function(req, res){
  console.log("POST DATA", req.body);
  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err){
    if(err){
      console.log('something went wrong');
    }else{
      console.log('successfully added a user!');
      res.redirect('/')
    }
  })
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
