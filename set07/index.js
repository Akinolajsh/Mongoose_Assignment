const express = require("express");
require("./config/Database");

const port = 9090;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running",
  });
});

app.listen(port, () => {
  console.log("");
  console.log("server is listening on port", port);
});
