var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

var User = require("../models/user");

router.post("/", userController.signup); //create User

router.post('/login', userController.login)

module.exports = router;