"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
  //finds all Posts
  Models.Post.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getPostsById = (req, res) => {
  Models.Post.findAll({
    where: {
      id: req.params.id
    }
  })
  .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
}

const createPost = (data, res) => {
  //creates a new Post using JSON data POSTed in request body
  console.log(data);
  new Models.Post(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePost = (req, res) => {
  //updates the Post matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Post.update(req.body, {
    where: { id: req.params.id },
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deletePost = (req, res) => {
  //deletes the user matching the ID from the param
  Models.Post.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

//adding in functions for liking and commenting on posts
const likePost = (req, res) => {
  Models.Post.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } }, //increments by 1 every time post is liked
    { new: true }
  )
    .then((data) => res.send({ result: 200, data: data })) //sends update back if successfully liked lol
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message }); //if bad like then error internal server error sent back
    });
};

const commentOnPost = (req, res) => {
  const comment = {
    text: req.body.text,
    createdAt: new Date(),
  };

  Models.Post.findByIdAndUpdate(
    req.params.id,
    { $push: { comments: comment } }, //this line is taking the comment and pushing it into the existing array.
    { new: true }
  )
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message }); //if bad comment add then error internal server error sent back
    });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  commentOnPost,
  likePost,
  getPostsById
};
