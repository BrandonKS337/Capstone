const Models = require("../models");

const data = [
  {
    monster_name: "Evil Cow ",
    difficulty_level: 20,
    xp_value: 420,
    race_id: 9294,
    type: 5,
    description: "The Evil Cow, a twisted aberration born of dark magic and malevolent forces, roams the haunted fields and desolate moors. Its once-docile nature has been corrupted, turning it into a menacing creature that leaves chaos in its wake. With crimson eyes gleaming with malice and thunderous hooves that shake the earth, the Evil Cow strikes terror into the hearts of all who cross its path, a living embodiment of nature's corrupted fury.",
  },
  {
    monster_name: "Sketchy Beaver",
    difficulty_level: 15,
    xp_value: 420,
    race_id: 8888,
    type: 5,
    description: "The Sketchy Beaver, a bizarre and enigmatic creature, haunts the forgotten corners of mystical woodlands. Its fur is a patchwork of surreal patterns, seemingly drawn with hasty strokes of an otherworldly artist's brush. With a mischievous glint in its eyes, the Sketchy Beaver possesses an uncanny ability to warp reality itself, leaving behind distorted landscapes and perplexing illusions. Whispers among the forest folk tell of its capricious nature, as it playfully toys with the boundaries between the mundane and the magical.",
  },
  {
    monster_name: "Shadow Cat",
    difficulty_level: 99,
    xp_value: 5541,
    race_id: 9999,
    type: 7,
    description: "The Shadow Cat, a creature of twilight and shadows, prowls the realm between darkness and light. Its sleek, obsidian fur absorbs all traces of illumination, rendering it nearly invisible in the night. With eyes that gleam like molten gold, the Shadow Cat is both a silent observer and a harbinger of mysterious omens. It is said to be a guardian of forgotten secrets, lurking in the shadows to protect ancient knowledge from those who seek to exploit its power. The haunting whispers of its presence serve as a reminder that even in the deepest darkness, a glimmer of the unknown can hold both danger and wonder.",
  },
  {
    monster_name: "Larry...oooo Larry",
    difficulty_level: 2,
    xp_value: 420,
    race_id: 2,
    type: 1,
    description: "Larry, a name that belies his sinister nature, is a cunning and treacherous badGuy feared across realms. With a twisted grin and a penchant for chaos, Larry has mastered the art of manipulation, weaving webs of deceit that ensnare even the most steadfast heroes. Born from the shadows, his dark ambition knows no bounds, and his nefarious schemes are whispered of in hushed tones. Behind his unassuming appearance lies a malevolent brilliance that thrives on sowing discord and reaping the chaos that ensues. Larry's name has become synonymous with malevolence, a symbol of the eternal struggle between light and darkness that challenges the very essence of heroism.",
  },


];

const seedMonsters = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the Monster exist in the DB already
    const monsters = await Models.Monster.findAll({
      where:
      {
        monster_name: element.monster_name,
        difficulty_level: element.difficulty_level,
        xp_value: element.xp_value,
        race_id: element.race_id,
        type: element.type,
        description: element.description
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
    if (monsters.length === 0) {
      // If no user, add one
      Models.Monster.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Monster exists", monsters[0].monster_name);
    }
  }
};

module.exports = {
  seedMonsters,
};
