// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { users } from "./data/users.js";
import { blogs } from "./data/blog.js";
import { userData } from "./utils/getData.js";
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static("public"));

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello World , <h1>this is Home page</h2> <a href=/blogs>Blogs</a>");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const isUserExist = users.some((user) => user.id == id);
  isUserExist
    ? res.status(200).json(userData(id))
    : res.status(404).send("User Not Found");
});

app.get("/blogs", (req, res) => {
  res.send(
    blogs
      .map((blog) => {
        return `<a href=/blog/${blog.id}><h1>${blog.title}</h1></a> <br>`;
      })
      .join(" ")
  );
});
app.get("/blog/:id", (req, res) => {
  const blogId = req.params.id;
  const blog = blogs.find((blog) => blog.id == blogId);
  res.send(
    `<h1>${blog.title}</h1> <h2> ${blog.content}</h2> <span><b>Author:</b> ${blog.author}</span> <br><a href=/blogs>←Back</a>`
  );
});

app.listen(port, () => {
  console.log(`server is live on ${port}`);
});
