const Models = require("../models");

const data = [
  {
    encounter_name: "Johnny vs the Blowfish",
    encounter_description: "Long time ago yada yada so on so forth",
    dm_id: 2,
    party_members: [1,2,3],
    heroes_ids: [1,2,3],
    monster_ids: [5,22],
    winner: 1,
    xp_earned: 654654654,
  },
  {
    encounter_name: "Lassy Vs boy in the Well",
    encounter_description: "to many times has johnny gone down that well. Lassy has had enough!!",
    dm_id: 1,
    party_members: [1,5,62],
    heroes_ids: [2],
    monster_ids: [1],
    winner: 0,
    xp_earned: 654654654,
  },
  {
    encounter_name: "Goblin attack in the Village",
    encounter_description: "Goblins attacked the village, the party fights back!!",
    dm_id: 1,
    party_members: [1,2,3],
    heroes_ids: [1,2,3],
    monster_ids: [5,5,5],
    winner: 1,
    xp_earned: 654654654,
  },
  {
    encounter_name: "Jedi invasion",
    encounter_description: "For eons the planet Deathstar has been home to peaceful kind folk. Fight off the evil forces of the jedi and save your home!!",
    dm_id: 1,
    party_members: [1,5,62],
    heroes_ids: [9,2,250],
    monster_ids: [9,66,52],
    winner: 1,
    xp_earned: 654654654,
  },


];

const seedEncounters = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the Encounter exist in the DB already
    const encounters = await Models.Encounter.findAll({
      where: 
      {
        encounter_name: element.encounter_name,
        encounter_description: element.encounter_description,
        dm_id: element.dm_id,
        party_members: element.party_members,
        heroes_ids: element.heroes_ids,
        monster_ids: element.monster_ids,
        winner: element.winner,
        xp_earned: element.xp_earned,
      },
      raw: true,
    })
      .then((data) => {
        // If a user is found the length will be > 1, else 0
        return data;
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });

    // Check if the data returned has a user or not
    if (encounters.length === 0) {
      // If no user, add one
      Models.Encounter.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Encounter exists", encounters[0].encounter_name);
    }
  }
};

module.exports = {
  seedEncounters,
};
