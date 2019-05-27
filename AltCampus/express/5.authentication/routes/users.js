/*
  Handled Routes:
    => GET: /
    => POST: /new
    => GET: /login
    => POST: /login
    => GET: /:id => not used, rendered userSearch from POST:/login directly
    => GET: /:id/delete
*/

let express = require('express');
let router = express.Router();
let User = require("./../models/User");
let mongoose = require("mongoose");

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (err, userList) => {
    if(err) return next(err);
    console.log("LOADED USER LIST");
    res.render("users", {users: userList});
  });
});

// displaying the userForm
router.get("/new", function(req, res, next){
  res.render("userForm");
});

// creating a new user
router.post("/new", function(req, res, next){
  User.create(req.body, function(err, newUser){
    if(err) return next(err);
    console.log("USER CREATED");
    res.redirect("/users/");
  });
});

// displaying login page
router.get("/login", function(req, res, next){
  res.render("loginForm");
});

// logging in
router.post("/login", function(req, res, next){
  let {email, password} = req.body;
  // checking if the fields are empty
  if(!email || !password) return res.redirect("/users/login", 400);
  // matching email in database
  User.findOne({email: email}, (err, user) => {
    if(err) return res.status(500).next(err);
    // if user match not found
    if(!user) return res.redirect("/users/login", 400);
    // if password not matched
    if(!user.validatePassword(password)) return res.redirect("/users/login", 400);
    console.log("Login successful, rendering user info");
    // saving user id in session
    req.session.userId = user._id;
    // console.log(req.session);  // to view the session object
    // if login successful displaying user info
    res.render("userSearch", {
      user: user,
      password: password,
    });
  });
});

// displaying user by id
// route not used
router.get("/:id", function(req, res, next){
  User.findById(req.params.id, function(err, userSearched){
    if(err) return next(err);
    console.log("USER SEARCHED"); 
    res.render("userSearch", {user: userSearched});
  });
});

// deleting user
router.get("/:id/delete", function(req, res, next){
  if(req.session && req.session.userId){
    User.findByIdAndDelete(req.params.id, function(err, deletedUser){
      if(err) return next(err);
      console.log("USER DELETED");
      res.redirect("/users");
    });
  }
  else res.send("Request Denied.");
});

module.exports = router;
