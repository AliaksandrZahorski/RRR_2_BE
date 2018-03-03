let mongoose = require('mongoose');

module.exports = () => {
  mongoose.Promise = global.Promise;

  let db = mongoose.connect('mongodb://localhost:27017/blogs');

  require('../app/blog.model');
  require('../app/user.model');

  return db;
};
