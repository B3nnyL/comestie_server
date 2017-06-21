var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var database = require('./config/db.js');
var cookieParser = require('cookie-parser');

mongoose.connect(database.url);

var app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

require('./routes/api.js')(app);

app.get('/',function(req, res){
	res.send('restful API is running');
});

app.listen(3600);
console.log('Listening on 3600');