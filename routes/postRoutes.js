const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Base Route http://localhost:8000/api/posts
router.get("/", (req, res) => {
  Controllers.posts.getPosts(res);
});
router.get('/:id', (req, res) => {
  Controllers.posts.getPostsById(req, res)
});

// Create a new post
router.post("/create", (req, res) => {
  Controllers.posts.createPost(req.body, res);
});

//http://localhost:8000/api/posts/:<id>
router.put("/:id", (req, res) => {
  Controllers.posts.updatePost(req, res);
});

// Delete a post by ID
router.delete("/:id", (req, res) => {
  Controllers.posts.deletePost(req, res);
});

// Like a post by ID
router.put("/:id/like", (req, res) => {
  Controllers.posts.likePost(req, res);
});

// Comment on a post by ID
router.post("/:id/comment", (req, res) => {
  Controllers.posts.commentOnPost(req, res);
});

module.exports = router;