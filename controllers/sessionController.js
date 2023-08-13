"use strict";

const Models = require("../models");

const getSessions = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Session.findAll({})
    //finds all Sessions
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getSessionById = (req, res) => {
  Models.Session.findAll({
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

const createSession = (data, res) => {
  Models.Session.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateSession = (req, res) => {
  //updates the Hero matching the ID from the param using JSON data POSTed in request body
  Models.Session.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteSession = (req, res) => {
  //deletes the Hero matching the ID from the param
  Models.Session.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
};
