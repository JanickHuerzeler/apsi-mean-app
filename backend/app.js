const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const postmodel = require('./models/post');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://apsi-tutorial-user:jhNxlVW8VjPurTpD@cluster0.9qznl.mongodb.net/node-angular-database?retryWrites=true&w=majority", { useNewUrlParser: true }).then(() => {
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
  postmodel.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'Posts Fetched Successfully',
      posts: documents //.map()
    });
  });
});

app.post("/api/posts", (req, res, next) => {
  const post = new postmodel({ title: req.body.title, content: req.body.content });
  post.save();
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

module.exports = app;
