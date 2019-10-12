'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  isbn: Number,
  title: String,
  author: String
});

module.exports = mongoose.model('Book', BookSchema);
