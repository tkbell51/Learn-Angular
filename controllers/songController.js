const Song = require('../models/song');
var bodyParser = require('body-parser');

module.exports = {
      createSong: (req, res, next) =>{
            var body = req.body;
            const song = new Song({
                  title: body.title,
                  artist: body.artist,
                  keySignature: body.keySignature,
                  group: body.group,
                  url: body.url
            });
            song.save((err, result)=>{
                  if(err){
                        return res.status(500).json({
                              title: 'An error occured',
                              error: err
                        })
                  }
                  res.status(201).json({
                        message: 'Save Song',
                        obj: result
                  })
            })
      },

      getSongs: (req, res, next) => {
            Song.find()
                  .exec((err, songs)=>{
                        if (err) {
                              return res.status(500).json({
                                    title: 'An error occurred',
                                    error: err
                              });
                        }
                        res.status(200).json({
                              message: 'Success',
                              obj: songs
                        })
                  })
      },

      editSong: (req, res, next) => {
            Song.findById(req.params.id, (err, song)=>{
                  if(err){
                        return res.status(500).json({
                              title: 'An error occured',
                              error: err
                        });
                  }
                  if(!song) {
                        return res.status(500).json({
                              title: 'No Song Found!',
                              error: {message: 'Song not found'}
                        });
                  }
                  let body = req.body;
                  song.title = body.title;
                  song.artist = body.title;
                  song.keySignature = body.keySignature;
                  song.group = body.group;
                  song.url = body.url;
                  song.save((err, result) => {
                    if (err) {
                      return res
                        .status(500)
                        .json({
                          title: "An error occured",
                          error: err
                        });
                    }
                    res
                      .status(200)
                      .json({
                        message: "Updated Song",
                        obj: result
                      });
                  });
            })
      },

      deleteSong: (req, res, next) => {
            Song.findById(req.params.id, (err, song)=>{
                  if(err){
                        return res.status(500).json({
                              title: 'An error occured',
                              error: err
                        });
                  }
                  if(!song) {
                        return res.status(500).json({
                              title: 'No Song Found!',
                              error: {message: 'Song not found'}
                        });
                  }
                 song.remove((err, result) => {
                    if (err) {
                      return res
                        .status(500)
                        .json({
                          title: "An error occured",
                          error: err
                        });
                    }
                    res
                      .status(200)
                      .json({
                        message: "Delete Song",
                        obj: result
                      });
                  });
            })
      }
}