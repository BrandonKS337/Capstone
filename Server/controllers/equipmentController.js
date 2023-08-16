"use strict";

const Models = require("../models");

const getEquipment = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Equipment.findAll({})
    //finds all Equipment
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getEquipmentById = (req, res) => {
  Models.Equipment.findAll({
    where: { equipment_id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createEquipment = (data, res) => {
  Models.Equipment.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateEquipment = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Equipment.update(req.body, { where: { equipment_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteEquipment = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Equipment.destroy({ where: { equipment_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};
