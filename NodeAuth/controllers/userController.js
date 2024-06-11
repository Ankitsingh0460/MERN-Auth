const Users = require("../models/userModel");

const AuthUser = (req, res) => {
  res.status(200).json({ message: "Auth User" });
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
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
}

const logoutUser = (req, res) => {
  res.status(200).json({ message: "logoout User" });
};

const getUserProfile = (req, res) => {
  res.status(200).json({ message: "UserProfile" });
};

const updateUserProfile = (req, res) => {
  res.status(200).json({ message: "updateUserProfile" });
};

module.exports = {
  AuthUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  ragisterUser,
};
