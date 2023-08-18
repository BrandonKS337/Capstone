const Models = require("../models");

const data = [
  {
    spell_name: "Fireball",
    description:
      "A burst of flames erupts from the caster's hands, engulfing enemies in searing fire.",
    level: 3,
    school: "Evocation",
    components: "V, S, M",
    range: "150 feet",
    duration: "Instantaneous",
  },
  {
    spell_name: "Healing Touch",
    description:
      "The caster's gentle touch restores vitality and health to wounded allies.",
    level: 2,
    school: "Restoration",
    components: "V, S",
    range: "Touch",
    duration: "Instantaneous",
  },
  {
    spell_name: "Invisibility",
    description:
      "With a wave of the hand, the caster or a target becomes invisible, moving unseen among their foes.",
    level: 2,
    school: "Illusion",
    components: "V, S",
    range: "Touch",
    duration: "Concentration, up to 1 hour",
  },
  {
    spell_name: "Arcane Missile",
    description:
      "The caster launches a flurry of magical missiles at targets, striking unerringly and dealing force damage.",
    level: 1,
    school: "Evocation",
    components: "V, S",
    range: "120 feet",
    duration: "Instantaneous",
  },
  {
    spell_name: "Nature's Ward",
    description:
      "The caster invokes the protective essence of nature, granting resistance to environmental hazards and damage.",
    level: 3,
    school: "Abjuration",
    components: "V, S",
    range: "Self",
    duration: "1 hour",
  },
  {
    spell_name: "Mystic Illusion",
    description:
      "The caster weaves an illusion so convincing that it alters perceptions, hiding creatures or objects from view.",
    level: 2,
    school: "Illusion",
    components: "V, S",
    range: "30 feet",
    duration: "Concentration, up to 10 minutes",
  },
  {
    spell_name: "Thunderous Strike",
    description:
      "The caster infuses a melee weapon with thunderous energy, striking enemies with a resounding boom and dealing extra damage.",
    level: 1,
    school: "Evocation",
    components: "V, M",
    range: "Self",
    duration: "Concentration, up to 1 minute",
  },
  {
    spell_name: "Searing Ray",
    description:
      "The caster conjures a searing beam of light that burns through enemies, dealing radiant damage and potentially blinding them.",
    level: 2,
    school: "Evocation",
    components: "V, S",
    range: "60 feet",
    duration: "Instantaneous",
  },
  {
    spell_name: "Dreamwalker's Path",
    description:
      "The caster enters a trance-like state, stepping into the dreamscape and traversing great distances in a blink of an eye.",
    level: 4,
    school: "Transmutation",
    components: "V, S",
    range: "Self",
    duration: "1 round",
  },
  {
    spell_name: "Frozen Embrace",
    description: "The caster blankets an area in frost and ice, creating difficult terrain and causing cold damage to those caught within.",
    level: 3,
    school: "Conjuration",
    components: "V, S, M",
    range: "60 feet",
    duration: "Concentration, up to 1 minute",
}

];

const seedSpells = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the spells exists in the DB already
    const spells = await Models.Spell.findAll({
      where: {
        spell_name: element.spell_name,
        description: element.description,
        level: element.level,
        school: element.school,
        components: element.components,
        range: element.range,
        duration: element.duration,
      },
      raw: true,
    })
      .then((data) => {
        // If a session is found the length will be > 1, else 0
        return data;
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });

    // Check if the data returned has a session or not
    if (spells.length === 0) {
      // If no session, add one
      Models.Spell.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Hero exists", spells[0].spell_name);
    }
  }
};

module.exports = {
  seedSpells,
};
