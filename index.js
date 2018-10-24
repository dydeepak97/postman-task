/* 
    App runs on node.js server to prevent 403 error duing API calls.
    No backend logic. 
    The server just sends a static html file and no further interaction with server.
    The main app runs on client side.
*/


var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;       //Dynamic port for heroku deployment

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, function(){
    console.log(port + " Port Listening...");
});
// GET home page.
app.get('/*', function(req, res, next) {
  //Path to main index.html file
  res.status(200).sendFile(path.join(__dirname+'../public/index.html')); 
});
