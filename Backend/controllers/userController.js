const Users = require("../models/userModel");
const { gernrateToken } = require("../utils/genrateToken");

const AuthUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    gernrateToken(res, user._id);
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
};

async function ragisterUser(req, res) {
  const { name, email, password } = req.body;
  const existUser = await Users.findOne({ email });
  if (existUser) {
    res.status(400);
    throw new Error("User alredy exist");
  }
  const user = await Users.create({
    name,
    email,
    password,
  });
  if (user) {
    gernrateToken(res, user._id);
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
}

const logoutUser = async (req, res) => {
  res.cookie("jwt", " ", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "logout User" });
};

const getUserProfile = async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
};

const updateUserProfile = async (req, res) => {
  const user = await Users.findById(req.user._id);
  if (user) {
    (user.name = req.body.name || user.name),
      (user.email = req.body.email || user.email);
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
    });
  } else {
    res.status(200).json({ message: "User Not Found" });
  }
};

module.exports = {
  AuthUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  ragisterUser,
};
