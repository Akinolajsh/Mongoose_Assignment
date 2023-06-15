const express= require("express")
require("./config/Database");

const port= 8080

const app= express()

app.use(express.json())

app.get("/",(req, res)=>{
    res.status(200).json({
        message: "server is running"
    })
})

app.listen(port,(req,res)=>{
    console.log("")
    console.log("server listening on port", port)
})