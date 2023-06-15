const mongoose = require("mongoose");

const electionDB = "mongodb://0.0.0.0:27017/electionDataBase";

const Database = async () => {
  try {
    const dbconnect = await mongoose.connect(electionDB);
    console.log("");
    console.log(`Database connecting to ${dbconnect.connection.host}`);
  } catch (error) {
    console.log("An error occurred while connecting to Database: ", error);
  }
};

module.exports = Database();
