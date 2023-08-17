// idea is that this seedController runs all seeds at once. Can add as many as needed in here and they will all populate my tables at once.
//this will also simply an async func later that scans for the tables existing before running these functions to populate them.


//import seed files
const userSeeds = require("./userSeeds");
const classSeeds = require("./classSeeds");
const encounterSeeds = require("./encounterSeeds");
const equipmentSeeds = require("./equipmentSeeds");
const heroSeeds = require("./heroSeeds");
const monsterSeeds = require("./monsterSeeds");
const partySeeds = require("./partySeeds")


//async func to run em all 
async function runAllSeeds() {
  await userSeeds.seedUsers();
  await classSeeds.seedClasses();
  await encounterSeeds.seedEncounters();
  await equipmentSeeds.seedEquipment();
  await heroSeeds.seedHeroes();
  await monsterSeeds.seedMonsters();
  await partySeeds.seedParties()
  console.log("All seeds completed successfully!");
}

module.exports = {
  runAllSeeds,
};
