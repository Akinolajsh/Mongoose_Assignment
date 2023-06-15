const express = require("express");
require("./config/Database")

const app = express();

const port = 4040;

app.use(express.json())

app.get("/",(req, res)=>{
res.status(200).json({
    message: "server is running"
})
})

app.listen(port,()=>{
    console.log("")
    console.log("server listening on port",port)
})
