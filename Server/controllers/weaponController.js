"use strict";

const Models = require("../models");

const getWeapons = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Weapon.findAll({})
    //finds all Weapons
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getWeaponById = (req, res) => {
  Models.Weapon.findAll({
    where: { weapon_id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createWeapon = (data, res) => {
  Models.Weapon.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateWeapon = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Weapon.update(req.body, { where: { weapon_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteWeapon = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Weapon.destroy({ where: { weapon_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getWeapons,
  getWeaponById,
  createWeapon,
  updateWeapon,
  deleteWeapon,
};
