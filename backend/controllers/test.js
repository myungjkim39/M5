const mongoose = require("mongoose");

// Define a Mongoose schema
const messageSchema = new mongoose.Schema
({
  name: 
  { type: String, 
    required: true },
});

module.exports = mongoose.model("Message", messageSchema);