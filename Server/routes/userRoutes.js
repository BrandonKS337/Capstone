const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//http://localhost:8000/api/users
router.get("/", (req, res) => {
  Controllers.user.getUsers(res);
});

//http://localhost:8000/api/users/<:id>
router.get("/:id", (req, res) => {
  Controllers.user.getUsersById(req, res);
});

//http://localhost:8000/api/users/createUser
router.post("/create", (req, res) => {
  Controllers.user.createUsers(req.body, res);
});

//http://localhost:8000/api/users/createPost
router.post("/createPost", (req, res) => {
  Controllers.user.createPost(req.body, res);
});

//http://localhost:8000/api/users/:<id>
router.put("/:id", (req, res) => {
  Controllers.user.updateUser(req, res);
});

//http://localhost:8000/api/users/:<id>
router.delete("/:id", (req, res) => {
  Controllers.user.deleteUser(req, res);
});
//http://localhost:8000/api/users/hero/:<id>
router.put("/hero/:id", (req, res) => {
  Controllers.user.updateHeroid(req, res);
}); //new route created to update the character ids associated within the user table to the hero table. Idea being this is json format that ties an array Of numbers to user and all the numbers in array are associated with hero_ids therefore they now belong to user. 

//http://localhost:8000/api/users/encounter/:<id>
router.put("/encounter/:id", (req, res) => {
  Controllers.user.updateEncounterid(req, res);
}); //new route created to update the character id

//used as a test route during class session not needed for functionality. Just keeping as a reference
// router.post("/testPassword/:id", (req, res) => {
//   Controllers.userController.getUsersByIdTestPassword(req, res)
// })

module.exports = router;
