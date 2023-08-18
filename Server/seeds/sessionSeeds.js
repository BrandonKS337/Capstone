const Models = require("../models");

const data = [
  {
    session_title: "We almost all died",
    dm_id: 1,
    post: "Im a huge post about how well the session went",
    media: null,
    encounter_ids: null,
  },
  {
    session_title: "Unveiling the Enigma",
    dm_id: 1,
    post: "What a mysterious and thrilling session we had today! The players delved into the depths of a forgotten crypt, uncovering ancient artifacts and deciphering cryptic inscriptions. Tensions were high as they faced off against lurking undead guardians, and their teamwork truly shone as they cracked the enigma of the crypt's secrets. Exciting twists and turns made this session an unforgettable journey of discovery.",
    media: null,
    encounter_ids: null,
  },
  {
    session_title: "Journey through the Forbidden Forest",
    dm_id: 1,
    post: "Venturing into the heart of the forbidden forest was both exhilarating and nerve-wracking. The players encountered eerie creatures and enchanting flora, creating an atmosphere of mystical beauty and eerie tension. The DM's masterful storytelling had us all on the edge of our seats as we navigated through the dense foliage, unraveling the forest's hidden lore and facing unexpected challenges. This session was a true testament to the power of imagination and roleplaying.",
    media: null,
    encounter_ids: null,
  },
];

const seedSessions = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the session exists in the DB already
    const sessions = await Models.Session.findAll({
      where: {
        session_title: element.session_title,
        dm_id: element.dm_id,
        post: element.post,
        media: element.media,
        encounter_ids: element.encounter_ids,
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
    if (sessions.length === 0) {
      // If no session, add one
      Models.Session.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Hero exists", sessions[0].session_title);
    }
  }
};

module.exports = {
  seedSessions,
};
