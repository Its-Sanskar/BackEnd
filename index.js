// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config.js";
const port= process.env.PORT || 8080
const app = express();
app.use(express.static("public"));

app.use(cors());
const devData = (name) => {
  return { name: name, age: 21, city: "Chhindwara" };
};

app.get("/", (req, res) => {
  res.send("hello World , <h1>this is Home page</h2>");
});
app.get("/about/:name", (req, res) => {
  res.json(devData(req.params.name));
});
app.get("/blog", (req, res) => {
  res.send(
    `<h1>name is ${req.query.name}</h1> <br> <h2>age is ${req.query.age}`
  );
});

app.listen(port, () => {
  console.log("server is live");
});
