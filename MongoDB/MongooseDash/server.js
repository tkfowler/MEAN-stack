var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_dash');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var DogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number
})
mongoose.model('Dog', DogSchema);
var Dog = mongoose.model('Dog')

app.get('/', function(req, res){
  Dog.find({}, function(err, dogs){
    if(err){
      console.log('error');
    }else{
    res.render('index', {dogs:dogs})
    }
  })
});

app.get('/dogs/new', function(req, res){
  res.render('new')
});

app.get('/dogs/:id', function(req, res){
  Dog.findOne({_id:req.params.id}, function(err, dogs){
    if(err){
      console.log(req.params.id);
      console.log('error');
    }else{
      res.render('dog', {dog:dogs})
    }
  })
})

app.get('/dogs/edit/:id', function(req, res){
  Dog.findOne({_id:req.params.id}, function(err, dogs){
    if(err){
      console.log('error');
    }else{
      res.render('edit', {dog:dogs})
    }
  })
})

app.post('/dogs', function(req, res){
  var dog = new Dog({name: req.body.name, breed: req.body.breed, age: req.body.age});
  dog.save(function(err){
    if(err){
      console.log('something went wrong');
    }else{
      console.log('successfully added a user!');
      res.redirect('/')
    }
  })
})

app.post('/dogs/:id', function(req, res){
  Dog.update({_id:req.params.id}, {name: req.body.name, breed: req.body.breed, age: req.body.age}, function(err, dogs){
    res.redirect('/')
  })
})

app.post('/dogs/destroy/:id', function(req, res){
  Dog.remove({_id: req.params.id}, function(err, dogs){
    res.redirect('/')
  })
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
