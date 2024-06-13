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
      res.status(401);
      throw new Error("Not authorized invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized no token");
  }
};

module.exports = {
  protect,
};
