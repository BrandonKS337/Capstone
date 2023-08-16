const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Collects equipment from db, Base Route http://localhost:8000/api/equipment
router.get("/", (req, res) => {
  Controllers.equipment.getEquipment(res);
});

// should be to get equipment by id, http://localhost:8000/api/equipment
router.get('/:id', (req, res) => {
  Controllers.equipment.getEquipmentById(req, res)
});

// Create a new equipment, http://localhost:8000/api/equipment/create
router.post("/create", (req, res) => {
  Controllers.equipment.createEquipment(req.body, res);
});

//http://localhost:8000/api/equipment/:<id>
router.put("/:id", (req, res) => {
  Controllers.equipment.updateEquipment(req, res);
});

// Delete a equipment by ID, http://localhost:8000/api/equipment/:<id>
router.delete("/:id", (req, res) => {
  Controllers.equipment.deleteEquipment(req, res);
});


module.exports = router;