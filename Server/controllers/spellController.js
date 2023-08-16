"use strict";

const Models = require("../models");

const getSpells = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Spell.findAll({})
    //finds all Spells
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getSpellById = (req, res) => {
  Models.Spell.findAll({
    where: { spell_id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createSpell = (data, res) => {
  Models.Spell.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateSpell = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Spell.update(req.body, { where: { spell_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteSpell = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Spell.destroy({ where: { spell_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getSpells,
  getSpellById,
  createSpell,
  updateSpell,
  deleteSpell,
};
