const mongoose = require("mongoose");

const blogDB = "mongodb://0.0.0.0:27017/blogDataBase";

const Database = async () => {
  try {
    const dbconnect = await mongoose.connect(blogDB);
    console.log("")
    console.log(`Database connection to ${dbconnect.connection.host}`);
  } catch (error) {
    console.log("An error occurred while collecting blog data", error);
  }
};

module.exports = Database();