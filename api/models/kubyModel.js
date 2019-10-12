'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const config = require('config');


var BookSchema = new Schema({
  //_id: mongoose.Types.ObjectId, //for now _id == isbn number
  isbn: Number,
  title: String,
  author: String
  //message_by_user: String,
  //year: Number,
  //language: String,
  //pages: Number,
  //user_id: String,
  //location: { type: Schema.Types.ObjectId, ref: 'Location' }
});

//TODO model location
var LocationSchema = new Schema({
  //_id: mongoose.Types.ObjectId,
  name: String,
  lat: Number,
  lon: Number
  //books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

//TODO model user

//simple schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  //give different access rights if admin or not
  isAdmin: Boolean
});



module.exports.User = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Book', BookSchema);
module.exports = mongoose.model('Location', LocationSchema);
