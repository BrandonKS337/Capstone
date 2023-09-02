const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

//localhost:8080/api/auth/signup  
router.post("/signup", (req, res) => {
  Controllers.auth.signUpUser(req.body, res)
})

//localhost:8080/api/auth/login
router.post("/login", (req, res) => {
  Controllers.auth.loginUserByEmail(req, res)
})
router.post("/username", (req, res) => {
  Controllers.auth.loginUserByUsername(req, res)
})

router.put("/updatepassword/:id", (req, res) => {  //sets route using PUT method to a specific id (aka in this case the users id.)
  const userId = req.params.id; //extracts value of id param from url above and assigns as userId
  const newPassword = req.body.newPassword; //same as above but takes the password from the body of PUT method req and sets as newPassword
  Controllers.auth.updatePassword(userId, newPassword, res); //calls updatePassword function from authController passing in the new variables and response object
});

router.post("/logout", (req, res) => {
  Controllers.auth.logout(req, res)
})



module.exports = router;