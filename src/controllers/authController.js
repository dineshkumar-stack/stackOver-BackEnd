const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/db");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "2h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.register = async (req, res) => {
  try {
    const {username, email, password } = req.body;

    const existingUser = await User.findOne({ email });


    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword" , hashedPassword)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    console.log("newUser", newUser)

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, config.jwtSecret, {
      expiresIn: "2h",
    });

    console.log("token", token)

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.checkLogin = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ isLoggedIn: false });
    }

    return res.status(200).json({ isLoggedIn: true, user: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
