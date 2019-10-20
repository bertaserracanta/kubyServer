const config = require('config');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Book = require('./api/models/kubyModel'), //created model loading here
  bodyParser = require('body-parser');


// Run mongod -dbpath /Users/Dani/Desktop/data/db to open DB
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/kuby', function(err){
  if(err)
    console.log("ERROR")
    throw err
    ;
  console.log("Connectat amb èxit!");
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/kubyRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
