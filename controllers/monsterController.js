"use strict";

const Models = require("../models");

const getMonsters = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Monster.findAll({})
    //finds all Monsters/Creatures
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getMonsterById = (req, res) => {
  Models.Monster.findAll({
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

const createMonster = (data, res) => {
  Models.Monster.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateMonster = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Monster.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteMonster = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Monster.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getMonsters,
  getMonsterById,
  createMonster,
  updateMonster,
  deleteMonster,
};
