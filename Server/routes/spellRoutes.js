const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects spell from db, Base Route http://localhost:8000/api/spell
router.get("/", (req, res) => {
  Controllers.spell.getSpells(res);
});

// should be to get spell by id, http://localhost:8000/api/spell
router.get('/:id', (req, res) => {
  Controllers.spell.getSpellById(req, res)
});

// Create a new spell, http://localhost:8000/api/spell/create
router.post("/create", (req, res) => {
  Controllers.spell.createSpell(req.body, res);
});

//http://localhost:8000/api/spell/:<id>
router.put("/:id", (req, res) => {
  Controllers.spell.updateSpell(req, res);
});

// Delete a spell by ID, http://localhost:8000/api/spell/:<id>
router.delete("/:id", (req, res) => {
  Controllers.spell.deleteSpell(req, res);
});


module.exports = router;