const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects monsters from db, Base Route http://localhost:8000/api/monsters
router.get("/", (req, res) => {
  Controllers.monster.getMonsters(res);
});

// should be to get monsters by id, http://localhost:8000/api/monsters
router.get('/:id', (req, res) => {
  Controllers.monster.getMonsterById(req, res)
});

// Create a new Monster, http://localhost:8000/api/monsters/create
router.post("/create", (req, res) => {
  Controllers.monster.createMonster(req.body, res);
});

//http://localhost:8000/api/monsters/:<id>
router.put("/:id", (req, res) => {
  Controllers.monster.updateMonster(req, res);
});

// Delete a Monster by ID, http://localhost:8000/api/monsters/:<id>
router.delete("/:id", (req, res) => {
  Controllers.monster.deleteMonster(req, res);
});


module.exports = router;