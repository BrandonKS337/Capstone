"use strict";

const Models = require("../models");

const getRaces = (res) => {
  //finds all Posts
  Models.Race.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const getRaceById = (req, res) => {
  Models.Race.findAll({
    where: { race_id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createRace = (data, res) => {
  Models.Race.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateRace = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Race.update(req.body, { where: { race_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteRace = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Race.destroy({ where: { race_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getRaces,
  getRaceById,
  createRace,
  updateRace,
  deleteRace,
};
