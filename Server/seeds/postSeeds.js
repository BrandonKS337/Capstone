const Models = require("../models");

const data = [
  {
    user_id: 1,
    title: "I LOVE pAsterIES!!!",
    content: " About 12 hours ago I should have finally gone to bed and I am quickly going insane"
  },
  {
    user_id: 2,
    title: "user 1 is losing it!!??",
    content: "The crazy tards been up for days and I am pretty sure he's spend most of that time trying to ninja snacks from the pantry. Does he even sleep or is that a myth????"
  },
  {
    user_id: 1,
    title: "user 2 is a liar",
    content: "Everyone knows even numbered users can't be trusted. Look it up it's true",
  },
  {
    user_id: 3,
    title: "SOS",
    content: "both of you clowns have been coding to long....go to bed dorks",
  },
];

const seedPosts = async () => {
  // Loop over posts, await is important to resolve the promise (I promise you that the findAll method is a promise)
  for await (const element of data) {
    // Check if the Posts table exist in the DB already
    const posts = await Models.Post.findAll({
      where: 
      {
        user_id: element.user_id,
        title: element.title,
        content: element.content
      },
      raw: true,
    })
      .then((data) => {
        // If a post is found the length will be > 1, else 0
        return data;
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });

    // Check if the data returned has a post or not
    if (posts.length === 0) {
      // If no post, add one
      Models.Post.create(element)
        .then((data) => {
          console.log("Added", element);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    } else {
      console.log("Post exists", posts[0].title);
    }
  }
};

module.exports = {
  seedPosts,
};
