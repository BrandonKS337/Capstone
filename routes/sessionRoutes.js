const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us

// Collects Sessions from db, Base Route http://localhost:8000/api/Session
router.get("/", (req, res) => {
  Controllers.session.getSessions(res);
});

// should be to get a Session by id, http://localhost:8000/api/Session
router.get("/:id", (req, res) => {
  Controllers.session.getSessionById(req, res);
});

// Create a new Sessions, http://localhost:8000/api/Session/create
router.post("/create", (req, res) => {
  Controllers.session.createSession(req.body, res);
});

//http://localhost:8000/api/Session/:<id>
router.put("/:id", (req, res) => {
  Controllers.session.updateSession(req, res);
});

// Delete a Sessions by ID, http://localhost:8000/api/Session/:<id>
router.delete("/:id", (req, res) => {
  Controllers.session.deleteSession(req, res);
});

module.exports = router;
