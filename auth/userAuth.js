const User = require("../models/user_models");
const jwt = require("jasonwebtoken");
const bcrypt = require("bcryptjs");

const { roles } = require("../roles");

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

exports.signup = async (req, res, next) => {
  try {
    const { role, email, password, last_name, first_name } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role: role || "basic"
    });
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );
    newUser.accessToken = accessToken;
    await newUser.save();
    res.json({
      data: newUser,
      message: "You have signed up successfully"
    });
  } catch (err) {}
};
