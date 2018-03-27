const User = require("../models/user");
var bodyParser = require("body-parser");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = {
      signup: (req, res, next)=>{
            let body = req.body;
           const user = new User({
            username: body.username,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: bcrypt.hashSync(body.password, 10)
           });
           user.save((err, result) => {
             if (err) {
               return res
                 .status(500)
                 .json({
                   title: "An error occured",
                   error: err
                 });
             }
             res.status(201).json({
                 message: "New User created",
                 obj: result
               });
           });
      },

      login: (req, res, next) => {
        User.findOne({username: req.body.username}, (err, user)=>{
          if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
              });
          }
          if(!user){
            return res.status(401).json({
              title: 'Login failed',
              error: {message: 'Invalid login credentials'}
            });
          }
          if (!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(401).json({
              title: 'Login failed',
              error: {message: 'Invalid login credentials'}
          });
        }
        const token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
          message: 'Successfully logged in',
          token: token,
          userId: user._id
        });
      })
    }
}
