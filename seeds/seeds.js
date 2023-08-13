const Models = require("../models");

const data = [
  {
    firstName: "first",
    lastName: "person",
    email: "user1@email.com",
    password: "12345",
  },
  {
    firstName: "second",
    lastName: "person",
    email: "user2@email.com",
    password: "12345",
  },
  {
    firstName: "third",
    lastName: "person",
    email: "user3@email.com",
    password: "12345",
  },
  
];

const seedUsers = async () => {
  // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the user exists in the DB already
    const user = await Models.User.findAll({
      where: {
        email: element.email,
        firstName: element.firstName,
        lastName: element.lastName,
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
    if (user.length === 0) {
      // If no user, add one
      Models.User.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("User exists", user[0].email);
    }
  }
};

module.exports = {
  seedUsers,
};
