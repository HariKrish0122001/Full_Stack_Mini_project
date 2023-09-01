var express = require('express');
var router = express.Router();

var User = require("../models/controller/user");


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post("/signup", User.create_user);
router.post("/", User.login);
router.post('/profile',User.profile)

module.exports = router;
