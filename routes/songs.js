var express = require("express");
var router = express.Router();
var songController = require('../controllers/songController');

var Song = require('../models/song')


router.post("/", songController.createSong); //create Song

router.get("/", songController.getSongs); //Get Song

router.patch("/:id", songController.editSong); //Edit Song

router.delete("/:id", songController.deleteSong);//Delete Song
module.exports = router;
