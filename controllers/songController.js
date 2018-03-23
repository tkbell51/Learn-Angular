const Song = require('../models/song');
const User = require('../models/user')
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

module.exports = {
      createSong: (req, res, next) =>{
            var decoded = jwt.decode(req.query.token);
            User.findById(decoded.user._id, (err, user)=>{
                  if(err){
                        return res.status(500).json({
                              title: 'An error occured',
                              error: err
                        });
                  }
                  
            var body = req.body;
            const song = new Song({
                  title: body.title,
                  artist: body.artist,
                  keySignature: body.keySignature,
                  group: body.group,
                  url: body.url,
                  user: user._id
            });

            song.save((err, result)=>{
                  if(err){
                        return res.status(500).json({
                              title: 'An error occured',
                              error: err
                        })
                  }
                  user.songs.push(result);
                  user.save();
                  res.status(201).json({
                        message: 'Save Song',
                        obj: result
                  })
            })
            
      })
},

      getSongs: (req, res, next) => {
            Song.find()
                  .populate('user', 'firstName')
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
            var decoded = jwt.decode(req.query.token);
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
                  if(song.user != decoded.user._id){
                         return res
                           .status(401)
                           .json({
                             title:
                               "Not Authenticated",
                             error: {
                               message:
                                 "Users do not match"
                             }
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
            var decoded = jwt.decode(req.query.token);            
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
                  if (song.user != decoded.user._id) {
                    return res.status(401).json({
                        title: "Not Authenticated",
                        error: {message: 'Users do not match'}
                      });
                  }
                 song.remove((err, result) => {
                    if (err) {
                      return res.status(500).json({
                          title: "An error occured",
                          error: err
                        });
                    }
                    res.status(200).json({
                        message: "Delete Song",
                        obj: result
                      });
                  });
            })
      },

      authorizeUser: (req, res, next)=>{
            jwt.verify(req.query.token, 'secret', (err, decoded)=>{
                  if(err){
                        return res.status(401).json({
                              title: 'Not Authenticated',
                              error: err
                        })
                  }
                  next();
            })
      }
}