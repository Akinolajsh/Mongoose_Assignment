const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type: String,
  },
  writer: {
    type: String,
  },
  content: {
    type: String,
  },
  viewers: {
    type: String,
  },
});

const userModel = mongoose.model("bloggers", userSchema);

module.exports = userModel;
