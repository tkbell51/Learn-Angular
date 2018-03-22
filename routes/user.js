var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

var User = require("../models/user");

router.post("/", userController.createUser); //create User

module.exports = router;