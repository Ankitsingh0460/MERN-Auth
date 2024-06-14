const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.Secret);
      req.user = await Users.findById(decoded.userID).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized no token" });
  }
};

module.exports = {
  protect,
};
