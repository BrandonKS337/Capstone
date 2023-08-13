"use strict";

const User = require("./user"); //require the model
const Post = require("./post")
const Hero = require("./hero")
const Encounter = require("./encounter")
const Party = require("./party")
const Session = require("./session")
const Monster = require("./monster")

async function init() {
  await User.sync(); //sync the model
  await Post.sync();
  await Hero.sync();
  await Encounter.sync()
  await Party.sync()
  await Session.sync()
  await Monster.sync()
};

init();

module.exports = {
  User, //export the model
  Post,
  Hero,
  Encounter,
  Party,
  Session,
  Monster
};


//look up migrations and seeds or alt ways to make sure that new databases have a few users/characters/monsters by default
