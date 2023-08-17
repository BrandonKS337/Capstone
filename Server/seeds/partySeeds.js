const Models = require("../models");

const data = [
  {
    party_name: "Three dudes and a guitar",
    dm_id: 1,
    player_ids: [1, 2, 3],
    hero_ids: [98, 97, 96],
    session_ids: [1]
  },
  {
    party_name: "Grandma's Cookies",
    dm_id: 2,
    player_ids: [4, 5, 6],
    hero_ids: [99, 100, 101],
    session_ids: [2]
  },
  {
    party_name: "The Hermits",
    dm_id: 3,
    player_ids: [7, 8, 9, 10],
    hero_ids: [102, 45, 23, 44],
    session_ids: [3]
  },

];

const seedParties = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the parties exist in the DB already
    const parties = await Models.Party.findAll({
      where:
      {
        party_name: element.party_name,
        dm_id: element.dm_id,
        player_ids: element.player_ids,
        hero_ids: element.hero_ids,
        session_ids: element.session_ids
      },
      raw: true,
    })
      .then((data) => {
        // If a Party is found the length will be > 1, else 0
        return data;
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });

    // Check if the data returned has a Party or not
    if (parties.length === 0) {
      // If no Party, add one
      Models.Party.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Party exists", parties[0].party_name);
    }
  }
};

module.exports = {
  seedParties,
};
