const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  imageSrc: String,
  author: String,
  imageSrc2: String,
  comment: String,
});

module.exports = mongoose.model('Review', reviewSchema);
