const Models = require("../models");

const data = [
  {
    weapon_name: "Longsword",
    type: "Melee",
    damage: "1d8 slashing",
    properties: "Versatile (1d10)",
    description:
      "A versatile and iconic weapon, the longsword is favored by warriors for its balance of speed and power.",
    weight: 3.0,
  },
  {
    weapon_name: "Shortbow",
    type: "Ranged",
    damage: "1d6 piercing",
    properties: "Two-handed, ammunition (range 80/320)",
    description:
      "A compact and maneuverable ranged weapon, the shortbow is excellent for hit-and-run tactics.",
    weight: 2.0,
  },
  {
    weapon_name: "Warhammer",
    type: "Melee",
    damage: "1d8 bludgeoning",
    properties: "Versatile (1d10)",
    description:
      "The warhammer delivers crushing blows, smashing through armor and defenses with its sheer force.",
    weight: 2.0,
  },
  {
    weapon_name: "Crossbow",
    type: "Ranged",
    damage: "1d8 piercing",
    properties: "Loading, ammunition (range 80/320)",
    description:
      "The crossbow combines range and power, making it a favored choice for hunters and marksmen.",
    weight: 5.0,
  },
  {
    weapon_name: "Dagger",
    type: "Melee/Ranged",
    damage: "1d4 piercing",
    properties: "Finesse, light, thrown (range 20/60)",
    description:
      "The dagger is a versatile weapon, suitable for both quick strikes in close quarters and precise throws at a distance.",
    weight: 1.0,
  },
  {
    weapon_name: "Greatsword",
    type: "Melee",
    damage: "2d6 slashing",
    properties: "Heavy, two-handed",
    description:
      "The greatsword is a massive blade capable of delivering devastating cleaving strikes, but requires strength to wield effectively.",
    weight: 6.0,
  },
  {
    weapon_name: "Handaxe",
    type: "Melee/Ranged",
    damage: "1d6 slashing",
    properties: "Light, thrown (range 20/60)",
    description:
      "The handaxe is a balanced weapon, suitable for both chopping foes in close combat and throwing for ranged attacks.",
    weight: 2.0,
  },
  {
    weapon_name: "Staff",
    type: "Melee",
    damage: "1d6 bludgeoning",
    properties: "Versatile (1d8)",
    description:
      "The staff is a versatile tool, favored by spellcasters for channeling arcane energies and delivering melee strikes.",
    weight: 4.0,
  },
  {
    weapon_name: "Sling",
    type: "Ranged",
    damage: "1d4 bludgeoning",
    properties: "Ammunition (range 30/120)",
    description:
      "A simple ranged weapon, the sling is a practical choice for those who prefer projectiles over bows or crossbows.",
    weight: 0.0,
  },
  {
    weapon_name: "Rapier",
    type: "Melee",
    damage: "1d8 piercing",
    properties: "Finesse",
    description:
      "The rapier is a slim, elegant blade favored by swashbucklers and duelists for its finesse and precision.",
    weight: 2.0,
  },
];

const seedWeapons = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the weapon exists in the DB already
    const weapons = await Models.Weapon.findAll({
      where: {
        weapon_name: element.weapon_name,
        type: element.type,
        damage: element.damage,
        properties: element.properties,
        description: element.description,
        weight: element.weight,
      },
      raw: true,
    })
      .then((data) => {
        // If a weapon is found the length will be > 1, else 0
        return data;
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });

    // Check if the data returned has a weapon or not
    if (weapons.length === 0) {
      // If no session, add one
      Models.Weapon.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Weapon exists", weapons[0].weapon_name_name);
    }
  }
};

module.exports = {
  seedWeapons,
};
