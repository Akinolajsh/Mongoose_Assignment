const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  course: {
    type: String,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
  },
});

const userModel = mongoose.model("student", userSchema);

module.exports = userModel;
