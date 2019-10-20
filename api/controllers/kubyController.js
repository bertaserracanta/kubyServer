'use strict';


var mongoose = require('mongoose'),
  Book = mongoose.model('Book'),
  User = mongoose.model('User'),
  Location = mongoose.model('Location');

exports.check_book = function(req, res) {
  console.log("check_book")
  let isbn = req.params.isbn;
  //console.log(isbn);
  Book.find({ isbn:isbn }, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.list_all_books = function(req, res) {
  console.log("list_all_books")
  Book.find({}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.upload_a_book = function(req, res) {
  console.log("upload_a_book")
  var new_book = new Book(req.body);
  new_book.save(function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
  Location.find( { name:req.body.locName}, function(err, location) {
    if (err) {};
    //update location of new_book
    Book.updateOne(
      { _id: new_book._id },  //which book to update
      { $set:                 //$set operator
        {
          location: location[0]
        }
      },
      function(err, book) {}
    );
    //update books list in the location
    Location.updateOne(
      { _id: location[0]._id },
      { $push:
        {
          books:new_book._id
        }
      },
      function(err, loc){}
    );
  });


};

exports.retrieve_a_book = function(req, res) {
  console.log("retrieve_a_book")
  console.log(req.params._id)
  //TODO add pickup_book function that reserves the book and gives a codi recollida

  Book.remove(
    { _id: req.params._id },
    function(err, book) {
      if (err)
        res.send(err);
      Location.updateOne(
        { _id: book.location._id },
        { $pull:
          {
            books: book._id
          }
        },
        function(err, loc){}
      );
      res.json({ message: 'Book successfully deleted' });
    }
  );
};

//location management

exports.add_location = function(req, res) {
  console.log("add_location")
  var new_location = new Location(req.body);
  console.log(req.body)
  new_location.save(function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.del_location = function(req, res) {
  console.log("del_location")
  console.log(req.params.name)
  Location.remove(
    { name: req.params.name },
    function(err, loc){         // TODO, only remove location if there aren't any books
      res.json({ message: 'Location' + req.params.name + 'successfully deleted' });
    }
  );
}

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
  console.log("search_locations")
  Location.find({}, function(err, locations) {
    if (err)
      res.send(err);
    res.json(locations);
  });
};

exports.search_book_by_title = function(req, res) {
  console.log("search_book_by_title")
  let word = req.params.word;
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
  console.log("list_all_users")
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
