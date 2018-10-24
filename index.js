var express = require('express');

var path = require('path');
// var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT,'localhost', function(){
    console.log("Listening...");
    
});
/* GET home page. */
app.get('/*', function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname+'../public/index.html')); 
});
