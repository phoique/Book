const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author_id: String,
  name: String,
  genre: String
});

module.exports = mongoose.model('Book', bookSchema);