let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    name: String,
    password: String,
  },
  {
    collection: 'users',
  },
);

mongoose.model('User', UsersSchema);
