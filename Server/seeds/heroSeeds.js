const Models = require("../models");

const data = [
  {
    user_id: 2,
    hero_name: "Johnny Beansprout",
    hero_level: 4,
    xp: 65465,
    race_id: "human",
    class_id: "cleric",
    image_url: "https://i.pinimg.com/1200x/51/56/c9/5156c904faec587f35f130f2ce37058d.jpg",
    background: "Johnny Beansprout is a compassionate human cleric devoted to healing and spiritual guidance. Raised in a humble village, he found solace in the teachings of his local temple and embarked on a spiritual journey to aid the sick and downtrodden. Armed with unwavering faith and a kind heart, Johnny Beansprout now travels the realm, offering his healing touch and spreading hope to all he encounters.",
  },
  {
    user_id: 2,
    hero_name: "Eldric Fireblade",
    hero_level: 4,
    xp: 65452,
    race_id: "dwarf",
    class_id: "warrior",
    background: "Eldric Fireblade, a legendary hero of fiery origins, emerged from the ashes of his destroyed homeland. He wields a blade imbued with the elemental power of fire, a testament to his fierce determination and mastery of pyromancy. Driven by a burning desire for justice, Eldric Fireblade roams the realms, seeking to quench the flames of tyranny and ignite hope in the hearts of those oppressed.",
  },
  {
    user_id: 2,
    hero_name: "Sylvia Moonshadow",
    hero_level: 4,
    xp: 64896,
    race_id: "human",
    class_id: "rogue",
    background: "Silvia Moonshadow, a enigmatic and skilled rogue, hails from the secretive realm of the Nightshade Grove. With moonlit eyes and an uncanny ability to blend into the shadows, she navigates the darkness with unparalleled finesse. Silvia's past remains veiled in mystery, her motivations obscured by her enigmatic demeanor. Known for her stealthy prowess and silver-tongued charm, Silvia Moonshadow traverses the realms, unraveling secrets and threading her way through the intricate webs of intrigue.",
  },
  {
    user_id: 1,
    hero_name: "Aurora Swiftstrike",
    hero_level: 4,
    xp: 64896,
    race_id: "elf",
    class_id: "warrior",
    background: "A valiant elven warrior, was born under the gleaming Northern Lights that illuminated her destiny. Raised by a tribe of skilled archers, she mastered the art of precision and agility, earning her the moniker Swiftstrike. With her trusty bow and enchanted arrows, Aurora seeks to protect the realms from encroaching darkness, embodying the radiant spirit of the Aurora that guides her path.",
  },
  {
    user_id: 3,
    hero_name: "Galen Stormrider",
    hero_level: 4,
    xp: 64896,
    race_id: "gnome",
    class_id: "mage",
    background: "Galen Stormrider, a seasoned sailor and mage, hails from the coastal city of Arcanholm, where turbulent seas and tempestuous magic intertwine. Having survived a shipwreck caused by a magical storm, Galen emerged with newfound command over wind and water. Clad in sea-worn armor, he sails across the arcane currents, seeking ancient secrets and aiding those in need, as the embodiment of nature's fierce and untamed forces.",
  },
  {
    user_id: 4,
    hero_name: "Lyra Nightshade",
    hero_level: 2,
    xp: 122545,
    race_id: "tebaxi",
    class_id: "rogue",
    background: "Lyra Nightshade, a shadow dancer of the secretive Moonlit Order, was trained in the arts of stealth and subterfuge. Born into nobility, she forsook her privileged life to embrace the darkness that cast its allure upon her. As the Nightshade, Lyra wields twin daggers with lethal grace, prowling the night to thwart evildoers and unveil hidden plots. Her enigmatic past and veiled motives add to the mystique surrounding her vigilante persona.",
  },
  {
    user_id: 3,
    hero_name: "Aria Moonshadow",
    hero_level: 6,
    xp: 87500,
    race_id: "elf",
    class_id: "ranger",
    background: "Aria Moonshadow was born under the canopy of the ancient Elven woods. Guided by the whispers of the trees and songs of the stars, she is an unmatched archer. Her arrows fly true, guided by the blessings of the moon and her deep connection to nature. She defends the forests from those who seek to exploit them, and her legend is sung in Elven lullabies.",
    // image_url: "https://yourwebsite.com/path/to/images/aria_moonshadow.jpg"

},

{
    user_id: 4,
    hero_name: "Thorgar Stonefist",
    hero_level: 7,
    xp: 101202,
    race_id: "half-orc",
    class_id: "barbarian",
    background: "Born of both human and orcish blood, Thorgar's strength is only rivaled by his indomitable will. From the frigid, mountainous borders of orc territory, he has faced countless challenges head-on. With a battle axe that has tasted the blood of a hundred foes, he seeks to carve his destiny and find a place where he truly belongs.",
},

{
    user_id: 5,
    hero_name: "Liliana Whisperwind",
    hero_level: 5,
    xp: 75650,
    race_id: "halfling",
    class_id: "rogue",
    background: "Liliana, with nimble fingers and even nimbler feet, was once a famed thief of the Halfling Underguild. She now uses her skills in subterfuge and stealth to liberate treasures from tyrants and redistribute to the downtrodden. With a dagger dipped in shadow and a network of informants, she's always one step ahead.",
},

{
    user_id: 6,
    hero_name: "Maelor Stormweaver",
    hero_level: 8,
    xp: 120300,
    race_id: "dragonborn",
    class_id: "sorcerer",
    background: "Born amidst a tempest, Maelor's draconic heritage is that of the mighty blue dragon. With a roar, he can summon the fury of the storm and with a whisper, he can weave the very energies of magic. Cast out by his clan for his overwhelming power, he travels seeking knowledge and control over his innate arcane abilities.",
},

{
    user_id: 7,
    hero_name: "Seraphina Lightbearer",
    hero_level: 9,
    xp: 140750,
    race_id: "aasimar",
    class_id: "paladin",
    background: "Blessed by the heavens, Seraphina is a beacon of hope in a world consumed by darkness. Her divine lineage grants her formidable powers against the undead and malevolent spirits. With a shield that gleams like the morning sun and a conviction unyielding, she is on a holy quest to vanquish evil and spread the light.",
},

{
    user_id: 8,
    hero_name: "Glimwick Sparkspinner",
    hero_level: 3,
    xp: 50400,
    race_id: "gnome",
    class_id: "wizard",
    background: "Glimwick's insatiable curiosity and boundless enthusiasm for arcane knowledge made him a prodigious spellcaster. From the cozy libraries of Gnomeregan to the arcane towers of Netheril, his name is synonymous with magical innovation. Armed with a spellbook full of wonders and a mischievous twinkle in his eye, Glimwick's adventures are just beginning.",
}

  

];

const seedHeroes = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the Heroes exist in the DB already
    const heroes = await Models.Hero.findAll({
      where: 
      {
        // user_id: element.user_id,
        hero_name: element.hero_name,
        hero_level: element.hero_level,
        // xp: element.xp,
        race_id: element.race_id,
        class_id: element.class_id,
        background: element.background,
        // image_url: element.image_url
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
    if (heroes.length === 0) {
      // If no user, add one
      Models.Hero.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Hero exists", heroes[0].hero_name);
    }
  }
};

module.exports = {
  seedHeroes,
};

blarp blarp blarp


////test test test
