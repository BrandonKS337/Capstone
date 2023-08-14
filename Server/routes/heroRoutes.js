const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects heroes from db, Base Route http://localhost:8000/api/heroes
router.get("/", (req, res) => {
  Controllers.hero.getHeroes(res);
});

// should be to get heroes by id, http://localhost:8000/api/heroes
router.get('/:id', (req, res) => {
  Controllers.hero.getHeroById(req, res)
});

// Create a new hero, http://localhost:8000/api/heroes/create
router.post("/create", (req, res) => {
  Controllers.hero.createHero(req.body, res);
});

//http://localhost:8000/api/heroes/:<id>
router.put("/:id", (req, res) => {
  Controllers.hero.updateHero(req, res);
});

// Delete a hero by ID, http://localhost:8000/api/heroes/:<id>
router.delete("/:id", (req, res) => {
  Controllers.hero.deleteHero(req, res);
});


module.exports = router;