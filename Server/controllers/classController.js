"use strict";

const Models = require("../models");

const getClasses = (res) => {
  //finds all Posts
  Models.Classes.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const getClassById = (req, res) => {
  Models.Classes.findAll({
    where: { class_id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createClass = (data, res) => {
  Models.Classes.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateClass = (req, res) => {
  //updates the Class matching the ID from the param using JSON data POSTed in request body
  Models.Classes.update(req.body, { where: { class_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteClass = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Classes.destroy({ where: { class_id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
};
