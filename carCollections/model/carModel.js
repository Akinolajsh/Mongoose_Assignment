const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: Number,
  },
  color: {
    type: String,
  },
  version: {
    type: String,
  },
});

const userModel = mongoose.model("Garage", userSchema);

module.exports = userModel;
