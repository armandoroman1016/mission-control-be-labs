const router = require("express").Router();
const bcrypt = require("bcryptjs");
const secrets = require("../config/secrets");
const jwt = require("jsonwebtoken");

const Users = require("./auth-model");

//* Register
router.post("/register", (req, res) => {
  let credentials = req.body;
});

module.exports = router;
