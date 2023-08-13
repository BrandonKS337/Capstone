const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects party from db, Base Route http://localhost:8000/api/partyes
router.get("/", (req, res) => {
  Controllers.party.getPartys(res);
});

// should be to get partyes by id, http://localhost:8000/api/partyes
router.get('/:id', (req, res) => {
  Controllers.party.getPartyById(req, res)
});

// Create a new party, http://localhost:8000/api/partyes/create
router.post("/create", (req, res) => {
  Controllers.party.createParty(req.body, res);
});

//http://localhost:8000/api/partyes/:<id>
router.put("/:id", (req, res) => {
  Controllers.party.updateParty(req, res);
});

// Delete a party by ID, http://localhost:8000/api/partyes/:<id>
router.delete("/:id", (req, res) => {
  Controllers.hero.deleteParty(req, res);
});


module.exports = router;