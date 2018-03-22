const User = require("../models/user");
var bodyParser = require("body-parser");
var bcrypt = require('bcryptjs');

module.exports = {
      createUser: (req, res, next)=>{
            let body = req.body;
           const user = new User({
            username: body.username,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: bcrypt.hashSync(body.password, 25)
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
             res
               .status(201).json({
                 message: "New User created",
                 obj: result
               });
           });
      }
}