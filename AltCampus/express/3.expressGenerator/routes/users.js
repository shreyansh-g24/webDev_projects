var express = require('express');
var router = express.Router();

/* GET users listing. */
// No need to handle "/" route in users.js since our app doesnt have any feature on /users route
router.get("/", (req, res, next) => {
  console.log("No handler on this route");
  res.end();
});
// this request is to be handled first
router.get('/new', function(req, res, next) {
  res.render("new");
});
// handling post requests
router.post("/new", (req, res) => {
  // handling the form data
  // sending response in json format
  res.json(req.body);
});
// this route will be handled after request on /new. If handled before that, the code will never reach the handler for /new route
router.get("/:username", (req, res) => {
  res.json({username: req.params.username});  
});

module.exports = router;
