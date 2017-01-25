var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

process.env['APROOT'] = __dirname;

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
});
