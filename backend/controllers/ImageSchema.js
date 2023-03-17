const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  link: String,
});

module.exports = mongoose.model("Image", imageSchema);
