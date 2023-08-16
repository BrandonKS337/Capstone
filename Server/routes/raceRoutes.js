const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects race from db, Base Route http://localhost:8000/api/race
router.get("/", (req, res) => {
  Controllers.race.getRaces(res);
});

// should be to get race by id, http://localhost:8000/api/race
router.get('/:id', (req, res) => {
  Controllers.race.getRaceById(req, res)
});

// Create a new race, http://localhost:8000/api/race/create
router.post("/create", (req, res) => {
  Controllers.race.createRace(req.body, res);
});

//http://localhost:8000/api/race/:<id>
router.put("/:id", (req, res) => {
  Controllers.race.updateRace(req, res);
});

// Delete a race by ID, http://localhost:8000/api/race/:<id>
router.delete("/:id", (req, res) => {
  Controllers.race.deleteRace(req, res);
});


module.exports = router;