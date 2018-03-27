var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var database = require('./config/db');
var port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(database.url, {useMongoClient: true});
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

require('./routes/api')(app);

app.get('/', function(req,res){
  res.send('Hello');
});

app.listen(port);
console.log('app is running at port: ', port);