"use strict";

const User = require("./user"); //require the model
const Post = require("./post");
const Hero = require("./hero");
const Encounter = require("./encounter");
const Party = require("./party");
const Session = require("./session");
const Monster = require("./monster");
const Race = require("./race");
const Classes = require("./class");
const Weapon = require("./weapon");
const Spell = require("./spell");
const Equipment = require("./equipment");

async function init() {
  await User.sync(); //sync the model
  await Post.sync();
  await Hero.sync();
  await Encounter.sync();
  await Party.sync();
  await Session.sync();
  await Monster.sync();
  await Race.sync();
  await Classes.sync();
  await Weapon.sync();
  await Spell.sync();
  await Equipment.sync();
}

init();

module.exports = {
  User, //export the model
  Post,
  Hero,
  Encounter,
  Party,
  Session,
  Monster,
  Race,
  Classes,
  Weapon,
  Spell,
  Equipment,
};

//look up migrations and seeds or alt ways to make sure that new databases have a few users/characters/monsters by default
