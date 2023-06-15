const mongoose = require("mongoose");

const set07DB = "mongodb://0.0.0.0:27017/set07DataBase";

const Database = async () => {
  try {
    const dbconnect = await mongoose.connect(set07DB);
    console.log("");
    console.log(`Database connecting to ${dbconnect.connection.host}`);
  } catch (error) {
    console.log("An error occurred while connecting to Database", error);
  }
};

module.exports = Database();
