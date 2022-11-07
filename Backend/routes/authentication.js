const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Nhimilegapassword";

// Create a user using:  POST "/api/authentication/createuser". No login required.
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password atleast of 5 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    //If there are errors then return bad request & errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether the user is exist with same email already or not.
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Already have an acount with this eamil" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Create new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
            id: user.id
        }
      }
      const authenticationToken = jwt.sign(data, JWT_SECRET)

    //   res.json(user);
    res.json({authenticationToken});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Oops ! There is an internal error");
    }
  }
);

module.exports = router;
