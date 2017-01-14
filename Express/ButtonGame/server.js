var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  data = {count: count}
  res.render('index', data)
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var count = 0
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  // console.log("WE ARE USING SOCKETS!");
  // console.log(socket.id);
  socket.on("count", function (data){
    count += 1
    io.emit('update', count)
  })
  socket.on('reset', function(data){
    count = 0
    io.emit('update', count)
  })
});
