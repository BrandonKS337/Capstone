"use strict";

const Models = require("../models");

const getPartys = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Party.findAll({})
    //finds all Partys//the basics inside the party data.
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getPartyById = (req, res) => {
  Models.Party.findAll({
    where: { id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createParty = (data, res) => {
  Models.Party.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateParty = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Party.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteParty = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Party.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getPartys,
  getPartyById,
  createParty,
  updateParty,
  deleteParty,
};
