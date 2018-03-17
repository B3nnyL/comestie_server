var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var database = require('./config/db.js');
var cookieParser = require('cookie-parser');

mongoose.connect(database.url, {useMongoClient: true});

var app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

require('./routes/api.js')(app);

app.listen(3600);
console.log('Listening on 3600');