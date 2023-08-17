const Models = require("../models");

const data = [
  {
    equipment_name: "dry rations",
    weight: 0.2,
    quantity: 20,
    value: "2cp/each"
  },
  {
    equipment_name: "tent",
    weight: 10,
    quantity: 1,
    value: "5gp"
  },
  {
    equipment_name: "Bag of Silver Dust",
    weight: 2.8,
    quantity: 1,
    value: "52sp"
  },
  {
    equipment_name: "sharpening stone",
    weight: 0.4,
    quantity: 1,
    value: "5sp"
  },
  


];

const seedEquipment = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the Equipment exist in the DB already
    const equipment = await Models.Equipment.findAll({
      where: 
      {
        equipment_name: element.equipment_name,
        weight: element.weight,
        quantity: element.quantity,
        value: element.value
      },
      raw: true,
    })
      .then((data) => {
        // If equipment is found the length will be > 1, else 0
        return data;
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });

    // Check if the data returned has a user or not
    if (equipment.length === 0) {
      // If no user, add one
      Models.Equipment.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Equipment exists", equipment[0].equipment_name);
    }
  }
};

module.exports = {
  seedEquipment,
};
