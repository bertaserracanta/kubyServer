'use strict';

const express = require("express");
const router = express.Router();


module.exports = function(app) {
  var controller = require('../controllers/kubyController');

  // controller Routes

  app.route('/book/:_id')
    .get(controller.check_book)           //info of one book
    .delete(controller.retrieve_a_book)  //inside there is the waition for bar confirmation

  app.route('/book')
    .post(controller.upload_a_book)

  app.route('/books')
    .get(controller.list_all_books)       //list of all books

  app.route('/findBook/:word')
   .get(controller.search_book_by_title)

  app.route('/location/:name')
    .get(controller.search_one_location)  //info of one location (should contain list of books)
    .delete(controller.del_location)

  app.route('/location')
    .post(controller.add_location)

  app.route('/locations')
    .get(controller.search_locations)     //list of all locations

  app.route('/login')
    .get(controller.loginform)
    .post(controller.login);

  app.route('/logout')
    .get(controller.logoutform)
    .post(controller.logout);

  app.route('/signup')
    .get(controller.signupform)
    .post(controller.signup);

  app.route('/users')
    .get(controller.list_all_users)
    //.post(controller.signup);

};
