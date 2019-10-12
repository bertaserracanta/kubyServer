'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('config');
var ObjectId = mongoose.Schema.Types.ObjectId;


var BookSchema = new Schema({
  isbn: Number,
  title: String,
  author: String,
  year: Number,
  language: String,
  pages: Number,
  username: {type: ObjectId, ref: 'User'},
  message_by_user: String,
  location: {type: ObjectId, ref: 'Location'}
});

var LocationSchema = new Schema({
  name: String,
  lat: Number,
  lon: Number,
  books: [{type: ObjectId, ref: 'Book'}]
});

var UserSchema = new Schema({
  username: String,
  email: String,
  hash: String
});



module.exports.User = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Book', BookSchema);
module.exports = mongoose.model('Location', LocationSchema);
