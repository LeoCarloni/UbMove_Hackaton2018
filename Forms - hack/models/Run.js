var mongoose = require('mongoose');

var RunSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  transito: String,
  updated_date: { type: Date, default: Date.now },
  
  f_isbn: String,
  f_title: String,
  f_author: String,
  f_description: String,
  f_published_year: String,
  f_publisher: String,
  f_transito: String
});

module.exports = mongoose.model('Run', RunSchema);
