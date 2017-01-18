var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quotingdojo');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

app.get('/', function(req, res){
  res.render('index')
})

app.get('/quotes', function(req, res){
  Quote.find({}, function(err, quotes){
    if(err){
      console.log(err);
    }else{
      res.render('quotes', {quotes:quotes})
    }
  }).sort({_id: -1})
})

app.post('/quotes', function(req, res){
  console.log("created new quote");
  var quote = new Quote({name:req.body.name, quote:req.body.quote})
  quote.save(function(err){
    if(err){
      console.log(err);
      res.render('index', {error:err})
    }else{
      res.redirect('/quotes')
    }
  })
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
