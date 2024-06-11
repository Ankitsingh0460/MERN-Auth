const express = require("express");
const {
  AuthUser,
  ragisterUser,
  updateUserProfile,
  getUserProfile,
  logoutUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/auth", AuthUser);
router.post("/", ragisterUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

module.exports = router;
