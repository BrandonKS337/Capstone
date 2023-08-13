const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects encounters from db, Base Route http://localhost:8000/api/encounters
router.get("/", (req, res) => {
  Controllers.encounter.getEncounters(res);
});

// should be to get an encounter by id, http://localhost:8000/api/encounters
router.get('/:id', (req, res) => {
  Controllers.encounter.getEncounterById(req, res)
});

// Create a new encounter, http://localhost:8000/api/encounter/create
router.post("/create", (req, res) => {
  Controllers.encounter.createEncounter(req.body, res);
});

//http://localhost:8000/api/encounter/:<id>
router.put("/:id", (req, res) => {
  Controllers.encounter.updateEncounter(req, res);
});

// Delete a encounter by ID, http://localhost:8000/api/encounter/:<id>
router.delete("/:id", (req, res) => {
  Controllers.encounter.deleteEncounter(req, res);
});


module.exports = router;