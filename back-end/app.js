const express = require("express");
const env = require("dotenv");
const app = express();

env.config();

//PORT
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
