const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = "3001";
app.listen(PORT, () => {
  console.log("Running on Port " + PORT);
});
