var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

app.listen(3112);

/* 
var express = require('express');
var bodyParser = require('body-parser');
//var multer = require('multer');
//var upload = multer();
var app = express();

app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded
// for parsing multipart/form-data
//app.use(upload.array()); 
//app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});
app.listen(3000); */
