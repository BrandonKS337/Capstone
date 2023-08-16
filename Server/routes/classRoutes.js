const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects classes from db, Base Route http://localhost:8000/api/classs
router.get("/", (req, res) => {
  Controllers.classes.getClasses(res);
});

// should be to get an class by id, http://localhost:8000/api/classs
router.get('/:id', (req, res) => {
  Controllers.classes.getClassById(req, res)
});

// Create a new class, http://localhost:8000/api/class/create
router.post("/create", (req, res) => {
  Controllers.classes.createClass(req.body, res);
});

//http://localhost:8000/api/class/:<id>
router.put("/:id", (req, res) => {
  Controllers.classes.updateClass(req, res);
});

// Delete a class by ID, http://localhost:8000/api/class/:<id>
router.delete("/:id", (req, res) => {
  Controllers.classes.deleteClass(req, res);
});


module.exports = router;