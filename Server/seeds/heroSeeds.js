const { INTEGER } = require("sequelize");
const Models = require("../models");

const data = [
  {
    user_id: 2,
    hero_name: "Johnny Beansprout",
    hero_level: 10,
    xp: 65465,
    race_id: "human",
    class_id: "cleric",
    image_url: "https://i.pinimg.com/1200x/51/56/c9/5156c904faec587f35f130f2ce37058d.jpg",
    background: "Johnny Beansprout is a compassionate human cleric devoted to healing and spiritual guidance. Raised in a humble village, he found solace in the teachings of his local temple and embarked on a spiritual journey to aid the sick and downtrodden. Armed with unwavering faith and a kind heart, Johnny Beansprout now travels the realm, offering his healing touch and spreading hope to all he encounters.",
    STR: 0,
    DEX: -1,
    CON: 3,
    INT: 1,
    WIS: 4,
    CHA: 3,
    save_STR: 0,
    save_DEX: -1,
    save_CON: 3,
    save_INT: 0,
    save_WIS: 8,
    save_CHA: 7,
    passive_Perception: 14,
    passive_Investigation: 14,
    passive_Insight: 14,
  },
  {
    user_id: 2,
    hero_name: "Eldric Fireblade",
    hero_level: 3,
    xp: 40225,
    race_id: "dwarf",
    class_id: "Fighter",
    image_url: "https://i.pinimg.com/originals/d5/23/26/d523266cdfcf3bf6d0d4d891fcf44af2.jpg",
    background: "Eldric Fireblade, a legendary hero of fiery origins, emerged from the ashes of his destroyed homeland. He wields a blade imbued with the elemental power of fire, a testament to his fierce determination and mastery of pyromancy. Driven by a burning desire for justice, Eldric Fireblade roams the realms, seeking to quench the flames of tyranny and ignite hope in the hearts of those oppressed.",
    STR: 3,
    DEX: 1,
    CON:3,
    INT: 0,
    WIS: 1,
    CHA: -1,
    save_STR: 6,
    save_DEX: 1,
    save_CON: 6,
    save_INT: 0,
    save_WIS: 1,
    save_CHA: -1,
    passive_Perception: 14,
    passive_Investigation: 10,
    passive_Insight: 11
  },
  {
    user_id: 2,
    hero_name: "Sylvia Moonshadow",
    hero_level: 4,
    xp: 64896,
    race_id: "human",
    class_id: "rogue",
    image_url: "https://i.pinimg.com/564x/b6/79/3b/b6793b6d1bb2ad2e42d8439d1cdc8edb.jpg",
    background: "Silvia Moonshadow, a enigmatic and skilled rogue, hails from the secretive realm of the Nightshade Grove. With moonlit eyes and an uncanny ability to blend into the shadows, she navigates the darkness with unparalleled finesse. Silvia's past remains veiled in mystery, her motivations obscured by her enigmatic demeanor. Known for her stealthy prowess and silver-tongued charm, Silvia Moonshadow traverses the realms, unraveling secrets and threading her way through the intricate webs of intrigue.",
    STR: 1,
    DEX: 3,
    CON: 2,
    INT: -1,
    WIS: 2,
    CHA: 0,
    save_STR: 1,
    save_DEX: 5,
    save_CON: 2,
    save_INT: 1, 
    save_WIS: 2,
    save_CHA: 0,
    passive_Perception: 16,
    passive_Investigation: 11, 
    passive_Insight: 12
  },
  {
    user_id: 1,
    hero_name: "Aurora Swiftstrike",
    hero_level: 7,
    xp: 6588844,
    race_id: "elf",
    class_id: "Fighter",
    image_url: "https://i.pinimg.com/564x/3f/67/76/3f67769e67a1d58c0c9c216d5b552ee2.jpg",
    background: "A valiant elven Fighter, was born under the gleaming Northern Lights that illuminated her destiny. Raised by a tribe of skilled archers, she mastered the art of precision and agility, earning her the moniker Swiftstrike. With her trusty bow and enchanted arrows, Aurora seeks to protect the realms from encroaching darkness, embodying the radiant spirit of the Aurora that guides her path.",
    STR: 3,
    DEX: 2,
    CON: 2,
    INT: 2,
    WIS: 2,
    CHA: 0,
    save_STR: 6,
    save_DEX: 2,
    save_CON: 5,
    save_INT: 2,
    save_WIS: 2,
    save_CHA: 0,
    passive_Perception: 15,
    passive_Investigation: 12, 
    passive_Insight: 15
  },
  {
    user_id: 3,
    hero_name: "Galen Stormrider",
    hero_level: 16,
    xp: 136546841,
    race_id: "gnome",
    class_id: "Wizard",
    image_url: "https://femto.scrolller.com/gnome-wizard-by-tom-mcgrath-754jtexgzq-540x766.jpg",
    background: "Galen Stormrider, a seasoned sailor and mage, hails from the coastal city of Arcanholm, where turbulent seas and tempestuous magic intertwine. Having survived a shipwreck caused by a magical storm, Galen emerged with newfound command over wind and water. Clad in sea-worn armor, he sails across the arcane currents, seeking ancient secrets and aiding those in need, as the embodiment of nature's fierce and untamed forces.",
    STR: -1,
    DEX: -2,
    CON: 4,
    INT: 3,
    WIS: 5,
    CHA: 2,
    save_STR: -1,
    save_DEX: 0,
    save_CON: 4,
    save_INT: 3,
    save_WIS: 5,
    save_CHA: 2,
    passive_Perception: 2,
    passive_Investigation: 3,
    passive_Insight: 2
  },
  {
    user_id: 4,
    hero_name: "Lyra Nightshade",
    hero_level: 2,
    xp: 122545,
    race_id: "tebaxi",
    class_id: "rogue",
    image_url: "https://i.pinimg.com/564x/98/95/09/989509e1db19e44f2f5efda9e27090c3.jpg",
    background: "Lyra Nightshade, a shadow dancer of the secretive Moonlit Order, was trained in the arts of stealth and subterfuge. Born into nobility, she forsook her privileged life to embrace the darkness that cast its allure upon her. As the Nightshade, Lyra wields twin daggers with lethal grace, prowling the night to thwart evildoers and unveil hidden plots. Her enigmatic past and veiled motives add to the mystique surrounding her vigilante persona.",
    STR: 1,
    DEX: 4,
    CON: 2,
    INT: -1,
    WIS: 1,
    CHA: 0,
    save_STR: 1,
    save_DEX: 6,
    save_CON: 2,
    save_INT: 1, 
    save_WIS: 2,
    save_CHA: 0,
    passive_Perception: 16,
    passive_Investigation: 11, 
    passive_Insight: 12
  },
  {
    user_id: 3,
    hero_name: "Aria Moonshadow",
    hero_level: 6,
    xp: 87500,
    race_id: "elf",
    class_id: "ranger",
    image_url: "https://i.pinimg.com/564x/74/27/15/742715af22ea62a85027a36e509c10ce.jpg",
    background: "Aria Moonshadow was born under the canopy of the ancient Elven woods. Guided by the whispers of the trees and songs of the stars, she is an unmatched archer. Her arrows fly true, guided by the blessings of the moon and her deep connection to nature. She defends the forests from those who seek to exploit them, and her legend is sung in Elven lullabies.",
    // image_url: "https://yourwebsite.com/path/to/images/aria_moonshadow.jpg"
    STR: 2,
    DEX: 3,
    CON: 2,
    INT: 2,
    WIS: 1,
    CHA: 0,
    save_STR: 5,
    save_DEX: 6,
    save_CON: 2,
    save_INT: 2,
    save_WIS: 1,
    save_CHA: 0,
    passive_Perception: 14,
    passive_Investigation: 15,
    passive_Insight: 11
},

{
    user_id: 4,
    hero_name: "Thorgar Stonefist",
    hero_level: 7,
    xp: 101202,
    race_id: "half-orc",
    class_id: "barbarian",
    image_url: "https://i.pinimg.com/originals/c8/fc/d3/c8fcd3c1fa3da0638199f226519155b0.png",
    background: "Born of both human and orcish blood, Thorgar's strength is only rivaled by his indomitable will. From the frigid, mountainous borders of orc territory, he has faced countless challenges head-on. With a battle axe that has tasted the blood of a hundred foes, he seeks to carve his destiny and find a place where he truly belongs.",
    STR: 3,
    DEX: 1, 
    CON: 2,
    INT: -1,
    WIS: 0,
    CHA: 1,
    save_STR: 6,
    save_DEX: 1,
    save_CON: 5,
    save_INT: -1,
    save_WIS: 0,
    save_CHA: 1,
    passive_Perception: 10,
    passive_Investigation: 9,
    passive_Insight: 10,
},
{
    user_id: 5,
    hero_name: "Liliana Whisperwind",
    hero_level: 5,
    xp: 75650,
    race_id: "halfling",
    class_id: "monk",
    image_url: "https://i.pinimg.com/736x/f9/c3/8d/f9c38d2baacf8902bfa1d60c72aaec7e.jpg",
    background: "Liliana, with nimble fingers and even nimbler feet, was once a famed thief of the Halfling Underguild. She now uses her skills in subterfuge and stealth to liberate treasures from tyrants and redistribute to the downtrodden. With a dagger dipped in shadow and a network of informants, she's always one step ahead.",
    STR: 1,
    DEX: 3,
    CON: 2,
    INT: 0,
    WIS: 2,
    CHA: -1,
    save_STR: 4,
    save_DEX: 6,
    save_CON: 2,
    save_INT: 0,
    save_WIS: 2,
    save_CHA: -1,
    passive_Perception: 12,
    passive_Investigation: 10,
    passive_Insight: 15
  },

{
    user_id: 6,
    hero_name: "Maelor Stormweaver",
    hero_level: 8,
    xp: 120300,
    race_id: "dragonborn",
    class_id: "sorcerer",
    image_url: "https://cdnb.artstation.com/p/assets/images/images/028/071/797/large/gaston-s-garcia-b7d176d2-a3c4-4a48-95b8-113ab5ed246a.jpg?1593418830",
    background: "Born amidst a tempest, Maelor's draconic heritage is that of the mighty blue dragon. With a roar, he can summon the fury of the storm and with a whisper, he can weave the very energies of magic. Cast out by his clan for his overwhelming power, he travels seeking knowledge and control over his innate arcane abilities.",
    STR: 0,
    DEX: 1,
    CON: 2,
    INT: 1,
    WIS: 0,
    CHA: 3,
    save_STR: 0,
    save_DEX: 1,
    save_CON: 5,
    save_INT: 1, 
    save_WIS: 0,
    save_CHA: 6,
    passive_Perception: 10,
    passive_Investigation: 11,
    passive_Insight:10
  },

{
    user_id: 7,
    hero_name: "Seraph Lightbearer",
    hero_level: 9,
    xp: 140750,
    race_id: "aasimar",
    class_id: "paladin",
    image_url:"https://i.etsystatic.com/43204365/r/il/a2ca06/4989636283/il_fullxfull.4989636283_mary.jpg",
    background: "Blessed by the heavens, Seraphina is a beacon of hope in a world consumed by darkness. Her divine lineage grants her formidable powers against the undead and malevolent spirits. With a shield that gleams like the morning sun and a conviction unyielding, she is on a holy quest to vanquish evil and spread the light.",
    STR: 2,
    DEX: 0, 
    CON: 1,
    INT: -1,
    WIS: 1,
    CHA: 3,
    save_STR: 5,
    save_DEX: 3, 
    save_CON: 4, 
    save_INT: 2, 
    save_WIS: 8,
    save_CHA: 10,
    passive_Perception: 11,
    passive_Investigation: 9,
    passive_Insight: 15
  },

{
    user_id: 8,
    hero_name: "Glimwick Sparkspinner",
    hero_level: 18,
    xp: 265000,
    race_id: "gnome",
    class_id: "wizard",
    image_url: "https://i.pinimg.com/originals/f7/71/a0/f771a020b772dbb6c4db5fda3c35a9d5.png",
    background: "Glimwick's insatiable curiosity and boundless enthusiasm for arcane knowledge made him a prodigious spellcaster. From the cozy libraries of Gnomeregan to the arcane towers of Netheril, his name is synonymous with magical innovation. Armed with a spellbook full of wonders and a mischievous twinkle in his eye, Glimwick's adventures are just beginning.",
    STR: -1,
    DEX: 1,
    CON: 3,
    INT: 3,
    WIS: 0,
    CHA: 1,
    save_STR: -1,
    save_DEX: 1,
    save_CON: 3,
    save_INT: 9,
    save_WIS: 6,
    save_CHA: 1,
    passive_Perception: 10,
    passive_Investigation: 19,
    passive_Insight: 16
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



////test test test
