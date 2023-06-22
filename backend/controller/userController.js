const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

exports.createUser = async (req, res) => {
  try {
    // console.log(req.body.user);
    let userObj = req.body;
    let userOfDB = await User.findOne({
      username: userObj.username,
    });
    if (userOfDB !== null) {
      res.status(200).send({ message: "username is already taken" });
    } else {
      let hashedPassword = await bcryptjs.hash(userObj.password, 5);
      userObj.password = hashedPassword;
      await User.create(userObj);
      res.status(201).json({
        status: "success",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};
exports.login = async (req, res) => {
  try {
    let credObj = req.body;
    let userOfDB = await User.findOne({
      username: credObj.username,
    });
    if (userOfDB === null) {
      res.send({ message: "invalid username" });
    } else {
      let status = await bcryptjs.compare(credObj.password, userOfDB.password);
      if (status == false) {
        res.send({ message: "invalid password" });
      } else {
        let signedToken = jwt.sign({ username: userOfDB.username }, "abcdef", {
          expiresIn: "1d",
        });
        res.status(200).json({
          status: "success",
          token: signedToken,
          userObj: req.body.username,
        });
      }
    }

    //   console.log(signedToken);
  } catch (err) {
    res.status(400).json({
      status: "failure",
    });
  }
};

