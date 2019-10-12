'use strict';


var mongoose = require('mongoose'),
  Book = mongoose.model('Book'),
  User = mongoose.model('User'),
  Location = mongoose.model('Location');

exports.check_book = function(req, res) {
  let isbn = req.params.isbn;
  //console.log(isbn);
  Book.find({ isbn:isbn }, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.list_all_books = function(req, res) {
  Book.find({}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.upload_a_book = function(req, res) {
  var new_book = new Book(req.body);
  Location.find( { lat:req.body.lat, lon:req.body.lon }, function(err, location) {
    if (err) {}
    new_book.location = location[0]._id;
    Location.updateOne({_id:location[0]._id},{$push: {books:new_book._id}}, function(err, loc){});
  });
  new_book.save(function(err, book) {
    if (err)
      res.send(err);
  res.json(book);
  });
};

exports.retrieve_a_book = function(req, res) {
  console.log(req.params.isbn)
  //TODO add pickup_book function that reserves the book and gives a codi recollida
  Book.remove({ isbn:req.params.isbn, location:req.params.location }, function(err, book) {
    console.log(req.params.isbn)
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};

//location management

exports.add_location = function(req, res) {
  var new_location = new Location(req.body);
  console.log(req.body)
  new_location.save(function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

//hauria de retornar tots els llibres de la location
exports.search_one_location = function(req, res) {
  let location = req.params.location;
  //console.log(location);
  Location.find({ _id:location }, function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.search_locations = function(req, res) {
  Location.find({}, function(err, locations) {
    if (err)
      res.send(err);
    res.json(locations);
  });
};

exports.search_book_by_title = function(req, res) {
 console.log("GET");
 let word = req.params.word;
 console.log(find);
 Book.find({title: new RegExp(word, "i")}, function(err, book) {
   console.log(book);
   if (err)
     res.send(err);
   res.json(book);
 });
};

//login, logout, sign in management

exports.loginform = function(req, res) { //TODO
  Book.find({ }, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.signupform = function(req, res) { //TODO
  Book.find({ }, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.logoutform = function(req, res) { //TODO
  Book.find({ }, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.login = function(req, res) { //TODO
  Book.find({ }, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.logout = function(req, res) {//TODO
  Book.find({ }, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.signup = function(req, res) {//TODO
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
