const Models = require("../models");

const data = [
  {
    class_name: "druid",
    armor_class: 16,
    atk_dmg: 8,
    health: 100
  },
  {
    class_name: "paladin",
    armor_class: 18,
    atk_dmg: 8,
    health: 65
  },
  {
    class_name: "cleric",
    armor_class: 18,
    atk_dmg: 4,
    health: 45
  },
  {
    class_name: "barbarian",
    armor_class: 14,
    atk_dmg: 10,
    health: 68
  },
  {
    class_name: "ranger",
    armor_class: 15,
    atk_dmg: 8,
    health: 45
  },
  {
    class_name: "mage",
    armor_class: 12,
    atk_dmg: 10,
    health: 35
  }


];

const seedClasses = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the Classes exist in the DB already
    const classes = await Models.Classes.findAll({
      where: {
        class_name: element.class_name,
        armor_class: element.armor_class,
        atk_dmg: element.atk_dmg,
        health: element.health
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
    if (classes.length === 0) {
      // If no user, add one
      Models.Classes.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Class exists", classes[0].class_name);
    }
  }
};

module.exports = {
  seedClasses,
};
