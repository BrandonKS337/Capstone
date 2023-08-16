"use strict";

const Models = require("../models");

const getEncounters = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Encounter.findAll({})
    //finds all Encounters
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getEncounterById = (req, res) => {
  Models.Encounter.findAll({
    where: { encounter_id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createEncounter = (data, res) => {
  Models.Encounter.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateEncounter = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Encounter.update(req.body, { where: { encounter_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteEncounter = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Encounter.destroy({ where: { encounter_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getEncounters,
  getEncounterById,
  createEncounter,
  updateEncounter,
  deleteEncounter,
};
