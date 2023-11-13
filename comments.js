// Create a web server
// 1. create a web server
// 2. create a route to get all comments
// 3. create a route to get a single comment
// 4. create a route to create a new comment
// 5. create a route to update a comment
// 6. create a route to delete a comment
// 7. create a route to upvote a comment
// 8. create a route to downvote a comment

// 1. create a web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// 2. create a route to get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// 3. create a route to get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  res.send(comment);
});

// 4. create a route to create a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: uuidv4(),
    username: req.body.username,
    comment: req.body.comment,
    upvote: 0,
    downvote: 0,
  };
  comments.push(comment);
  res.status(201).send(comment);
});

// 5. create a route to update a comment
app.patch('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  if (req.body.username) {
    comment.username = req.body.username;
  }
  if (req.body.comment) {
    comment.comment = req.body.comment;
  }
  res.status(200).send(comment);
});

// 6. create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
  const commentIndex = comments.findIndex(
    (comment) => comment.id === req.params.id
  );
  if (commentIndex > -1) {
    comments.splice(commentIndex, 1);
  }
  res.status(204).send();
});

// 7. create a route to upvote a comment

app.post('/comments/:id/upvote', (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  if (comment) {
    comment.upvote++;
    res.status(200).send(comment);
  } else {
    res.status(404).send();
  }
});
