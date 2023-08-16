const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects weapon from db, Base Route http://localhost:8000/api/weapon
router.get("/", (req, res) => {
  Controllers.weapon.getWeapons(res);
});

// should be to get weapon by id, http://localhost:8000/api/weapon
router.get('/:id', (req, res) => {
  Controllers.weapon.getWeaponById(req, res)
});

// Create a new weapon, http://localhost:8000/api/weapon/create
router.post("/create", (req, res) => {
  Controllers.weapon.createWeapon(req.body, res);
});

//http://localhost:8000/api/weapon/:<id>
router.put("/:id", (req, res) => {
  Controllers.weapon.updateWeapon(req, res);
});

// Delete a weapon by ID, http://localhost:8000/api/weapon/:<id>
router.delete("/:id", (req, res) => {
  Controllers.weapon.deleteWeapon(req, res);
});


module.exports = router;