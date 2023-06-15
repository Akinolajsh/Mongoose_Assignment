const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  party: {
    type: String,
  },
  vote: {
    type: Number,
  },
  votersname: {
    type: String,
  },
  gender: {
    type: String,
  },
  candidatename: {
    type: String,
  },
});

const userModel = mongoose.model("2023 Election", userSchema);

module.exports = userModel;
