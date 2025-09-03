// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config.js";

const app = express();
app.use(express.static("public"));

app.use(cors({ origin: "http://127.0.0.1:5500" }));
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

app.listen(process.env.PORT, () => {
  console.log("server is live");
});
