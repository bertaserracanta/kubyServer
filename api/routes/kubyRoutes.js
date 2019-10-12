'use strict';
module.exports = function(app) {
  var controller = require('../controllers/kubyController');

  // controller Routes
  app.route('/books')
    .get(controller.list_all_books)
    .post(controller.upload_a_book);


  app.route('/book/:isbn')
    .get(controller.read_a_book)
    .delete(controller.retrieve_a_book);
};
