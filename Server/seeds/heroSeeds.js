const Models = require("../models");

const data = [
  {
    user_id: 2,
    hero_name: "Johnny Beansprout",
    hero_level: 4,
    xp: 65465,
    race_id: 2,
    class_id: 3,
    background: "Johnny Beansprout is a compassionate human cleric devoted to healing and spiritual guidance. Raised in a humble village, he found solace in the teachings of his local temple and embarked on a spiritual journey to aid the sick and downtrodden. Armed with unwavering faith and a kind heart, Johnny Beansprout now travels the realm, offering his healing touch and spreading hope to all he encounters.",
  },
  {
    user_id: 2,
    hero_name: "Eldric Fireblade",
    hero_level: 4,
    xp: 65452,
    race_id: 1,
    class_id: 5,
    background: "Eldric Fireblade, a legendary hero of fiery origins, emerged from the ashes of his destroyed homeland. He wields a blade imbued with the elemental power of fire, a testament to his fierce determination and mastery of pyromancy. Driven by a burning desire for justice, Eldric Fireblade roams the realms, seeking to quench the flames of tyranny and ignite hope in the hearts of those oppressed.",
  },
  {
    user_id: 2,
    hero_name: "Sylvia Moonshadow",
    hero_level: 4,
    xp: 64896,
    race_id: 4,
    class_id: 2,
    background: "Silvia Moonshadow, a enigmatic and skilled rogue, hails from the secretive realm of the Nightshade Grove. With moonlit eyes and an uncanny ability to blend into the shadows, she navigates the darkness with unparalleled finesse. Silvia's past remains veiled in mystery, her motivations obscured by her enigmatic demeanor. Known for her stealthy prowess and silver-tongued charm, Silvia Moonshadow traverses the realms, unraveling secrets and threading her way through the intricate webs of intrigue.",
  },


];

const seedHeroes = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the Heroes exist in the DB already
    const heroes = await Models.Hero.findAll({
      where: 
      {
        user_id: element.user_id,
        hero_name: element.hero_name,
        hero_level: element.hero_level,
        xp: element.xp,
        race_id: element.race_id,
        class_id: element.class_id,
        background: element.background,
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
