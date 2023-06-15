const express = require("express");

require("./config/Database");

const port = 3030;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running!! 🚀🚀🚀",
  });
});


app.listen(port,()=>{
    console.log("")
    console.log("server listening on port",port)
})