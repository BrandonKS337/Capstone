"use strict";

const Models = require("../models");

const getHeroes = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Hero.findAll({})
    //finds all Heros
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getHeroById = (req, res) => {
  Models.Hero.findAll({
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

const createHero = (data, res) => {
  Models.Hero.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateHero = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Hero.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteHero = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Hero.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getHeroes,
  getHeroById,
  createHero,
  updateHero,
  deleteHero,
};
