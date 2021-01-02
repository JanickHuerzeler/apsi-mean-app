const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const postmodel = require('./models/post');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://apsi-tutorial-user:jhNxlVW8VjPurTpD@cluster0.9qznl.mongodb.net/posts?retryWrites=true&w=majority").then(() => {
  console.log("Connected to database");
})
  .catch(() => {
    console.log("Connection Failed");
  });

app.use(bodyparser.json());

app.use((req, res, next) => {
  // Could use more restricted header values
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'snkfkjkf',
      title: 'First server-side post',
      content: 'This is comming from the server'
    },
    {
      id: 'gyrrshjhk',
      title: 'Second server-side post',
      content: 'This is commiing from the server'
    },
    {
      id: 'mhsetghj',
      title: 'Third server-side post',
      content: 'This is comming from the server'
    }];
  res.status(200).json({
    message: 'Posts Fetched Successfully',
    posts: posts
  });
});

app.post("/api/posts", (req, res, next) => {
  const post = new postmodel({ title: req.body.title, content: req.body.content });
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

module.exports = app;
