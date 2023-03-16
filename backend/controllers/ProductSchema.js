const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  specs: [String, String],
  price: String,
  image: String,
});

module.exports = mongoose.model('Product', productSchema);
