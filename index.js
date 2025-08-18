const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello World , <h1>this is Home page</h2>");
});
app.get("/about", (req, res) => {
  res.send("this is aboutPage");
});
app.listen(process.env.PORT, () => {
  console.log("server is live");
});
