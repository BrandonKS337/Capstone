"use strict";

const bcrypt = require("bcrypt");

// Even though this is a controller for auth, we can still use the model for User
const Models = require("../models");

// This is the same as the createUser function; however, this is the one that should be used for user sign up through the auth route
// Bcrypt documentation: https://www.npmjs.com/package/bcrypt

// See /controllers/userController.js

const signUpUser = async (data, res) => {
  // Generate a salt, define the rounds, optional: define version ("a", or "b") default: "b"
  const rounds = 10; //any more than 10 will take exponentially more CPU power
  const version = "a";
  const salt = await bcrypt.genSaltSync(rounds, version); //this is essentially the "hash", this line generates the hash and then waits
  const originalPassword = data.password; //this takes in the original password so that it doesn't get lost in the encryption process
  const hashedPassword = bcrypt.hashSync(originalPassword, salt); //this takes the original password, hashes it, then sets it to a new variable

  // Update data.password to the new hashed password BEFORE storing it in the database
  data.password = hashedPassword;

  Models.User.create(data)
    .then((data) => {
      // DONT SEND HASHED PASSWORDS BACK // this is set in code inside the user model btw in scopes segment.
      // Reset to originalPassword before returning
      data.password = originalPassword; //take POST request body and pull in that data to set the password key to = original password.
      res.send({ result: 201, data: data }); //on success send back res 201 for "updated success" and shows user created
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

//added an updatePassword route because normal PUT method from users doesn't actually run users change through hashing it just updates to the actually password they entered killing the purpose of bcrypt doing it during signup
const updatePassword = async (userId, newPassword, res) => {
  try {
    const rounds = 10;
    const version = "a";
    const salt = await bcrypt.genSaltSync(rounds, version);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);

    // Update the password in the database
    Models.User.update(
      //sequelize expects objects when updating so take in password and user id as such
      { password: hashedPassword },
      { where: { id: userId } } //targets specific user id in "sequelize" style terms... where: {target row} is the syntax template
    ).then((result) => {
      if (result[0] === 1) {
        res
          .status(200)
          .json({ success: true, message: "Password updated successfully." }); //for later use can extract rsp object here to display update to user....write that in the trello notes to do
      } else {
        res.status(404).json({ success: false, message: "User not found." });
      }
    });
  } catch (err) {
    console.log("Error:", err);
    res
      .status(500)
      .send({
        success: false,
        message: "An error occurred while updating the password.",
      });
  }
};

const loginUserByUsername = (req, res) => {
  //changed (body, res) here to req,res...body wasnt being used???
  const unhashedPassword = req.body.password; //changed this aswell from req.data.password to req.body.password....well see if that screws things up
  const username = req.body.username;

  Models.User.scope("withPassword")
    .findAll({ where: { username: username } }) //can add in other fields like username or something to double the verification here
    .then((data) => {
      if (
        data &&
        bcrypt.compareSync(unhashedPassword, data[0].dataValues.password)
      ) {
        data[0].dataValues.password = undefined;

        req.session.userId = data[0].dataValues.id

        res
          .status(200)
          .send({ success: true, message: "Boom All logged in and good to go", data: data });
      } else {
        console.log("Username or password is incorrect");

        res
          .status(403)
          .send({ success: false, data: "Wrong username or password!" }); //phrased like this to "throw off" a hacker.. can't immediately identify that one is correct and one is wrong in their hack attempt
      }
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const loginUserByEmail = (req, res) => {
  //changed (body, res) here to req,res...body wasnt being used???
  const unhashedPassword = req.body.password; //changed this aswell from req.data.password to req.body.password....well see if that screws things up
  const email = req.body.email;

  Models.User.scope("withPassword")
    .findAll({ where: { email: email } }) //can add in other fields like username or something to double the verification here
    .then((data) => {
      if (
        data &&
        bcrypt.compareSync(unhashedPassword, data[0].dataValues.password)
      ) {
        data[0].dataValues.password = undefined;
        res
          .status(200)
          .send({ success: true, message: "Boom All logged in and good to go", data: data });
      } else {
        console.log("Username or password is incorrect");

        res
          .status(403)
          .send({ success: false, data: "Wrong username or password!" }); //phrased like this to "throw off" a hacker.. can't immediately identify that one is correct and one is wrong in their hack attempt
      }
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const logout = (req, res) => {
  // Check if the user is logged in
  if (req.session.userId) {
    // Destroy the session data
    req.session.destroy(err => {
      if (err) {
        console.log("Error:", err);
        return res.status(500).send({ success: false, message: "Error during logout" });
      }
      // Clear the cookie that stores session info
      res.clearCookie('sid');
      return res.status(200).send({ success: true, message: "Logged out successfully" });
    });
  } else {
    //this will alert if no session active
    return res.status(400).send({ success: false, message: "User is not logged in" });
  }
};


module.exports = {
  signUpUser,
  loginUserByEmail,
  updatePassword,
  loginUserByUsername,
  logout
};
