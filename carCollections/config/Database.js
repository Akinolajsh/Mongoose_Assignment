const mongoose= require("mongoose")

const carDB= "mongodb://0.0.0.0:27017/carDataBase";

const Database= async()=>{
    try {
        const dbconnect = await mongoose.connect(carDB)
        console.log("")
        console.log(`Database connection ${dbconnect.connection.host}`)
    } catch (error) {
console.log("An error occurred while connecting to Database")        
    }
}

module.exports = Database();