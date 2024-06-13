const jwt = require("jsonwebtoken");

const gernrateToken = (res, userID) => {
  const token = jwt.sign({ userID }, process.env.Secret, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

module.exports = {
  gernrateToken,
};
