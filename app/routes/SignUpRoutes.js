const express = require("express");
const router = express.Router();
const axios = require("axios");
const signUpTemCopy = require("../models/SignUPModel");
const bcrypt = require("bcrypt");
//const Chat = require("./app/models/ChatSchema");
router.post("/signup", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  let user = await signUpTemCopy.findOne({
    email: req.body.email,
  });
  if (user) {
    return res.json({
      status: false,
      msg: "User Already Exists",
    });
  }
  const signUpUser = new signUpTemCopy({
    email: req.body.email,
    password: securePassword,
  });

  signUpUser
    .save()
    .then((data) => {
      res.json({ status: true, msg: "Successfully signUp" });
    })
    .catch((error) => {
      res.json({ status: false, msg: `Error in signUp${error}` });
    });
});
router.post("/login", async (req, res) => {
  
  const { email, password } = req.body;
  try {
    let user = await signUpTemCopy.findOne({
      email,
    });
    if (!user) {
      return res.json({
        status: false,
        msg: "User Not Exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({
        status: false,
        msg: "Incorrect Password !",
      });

    res.json({
      status: true,
      msg: "Succesfully Login",
      user,
    });
  } catch (e) {
    console.error(e);
    res.json({
      msg: "Server Error",
    });
  }
});

module.exports = router;
