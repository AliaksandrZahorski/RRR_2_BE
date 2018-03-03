let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BlogsSchema = new Schema({
    author: String,
    title: String,
    text: String,
  },
  {
    collection: 'records',
  },
);

mongoose.model('Blog', BlogsSchema);
