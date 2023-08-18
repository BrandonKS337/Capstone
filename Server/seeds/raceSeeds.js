const Models = require("../models");

const data = [
  {
    race_name: "aarakocra",
    description: "A majestic avian race with bird-like features, including wings and sharp beaks. Aarakocra are skilled in aerial combat and often live in mountainous regions."
  },
  {
    race_name: "elf",
    description: "Graceful and long-lived, elves possess keen senses and exceptional agility. They have a deep connection with nature and magic, making them skilled archers, spellcasters, and seekers of wisdom."
  },
  {
    race_name: "dwarf",
    description: "Stout and hardy, dwarves are known for their craftsmanship and affinity for underground dwelling. They excel in mining, forging, and melee combat, often wielding powerful axes."
  },
  {
    race_name: "human",
    description: "Versatile and adaptable, humans are the most diverse race, thriving in various cultures and roles. Their ambition and resilience make them natural leaders, warriors, mages, and artisans."
  },
  {
    race_name: "gnome",
    description: "Playful and curious, gnomes have a knack for inventing gadgets and delighting in life's little wonders. They are skilled illusionists and tinkerers, bringing creativity to their pursuits."
  },
  {
    race_name: "giant",
    description: "Towering and formidable, giants come in different types, each with distinct abilities. Some are fierce warriors, while others are more benevolent, often living in remote regions."
  },
  {
    race_name: "cow",
    description: "Peaceful and sturdy, cow-like creatures are known for their gentle nature. They are often domesticated for their milk, meat, and labor, but in fantasy settings, they might have unique abilities."
  },
  {
    race_name: "mermaid",
    description: "Enigmatic and alluring, mermaids possess the upper body of a humanoid and the lower body of a fish. They are adept swimmers and often associated with aquatic magic and mysteries."
  },
  {
    race_name: "fairy",
    description: "Tiny and ethereal, fairies are magical beings closely connected to nature. They have delicate wings and are known for their mischievous behavior, as well as their ability to wield enchanting magic."
  },
  {
    race_name: "tebaxi",
    description: "Agile and feline-like, tabaxi are known for their love of adventure and curiosity. They have cat-like features and excel in stealth, speed, and exploration, often seeking hidden treasures."
  },
];

const seedRaces = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the race exists in the DB already
    const races = await Models.Race.findAll({
      where: {
        race_name: element.race_name
      },
      raw: true,
    })
      .then((data) => {
        // If a race is found the length will be > 1, else 0
        return data;
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });

    // Check if the data returned has a race or not
    if (races.length === 0) {
      // If no race, add one
      Models.Race.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Race exists", races[0].race_name);
    }
  }
};

module.exports = {
  seedRaces,
};
