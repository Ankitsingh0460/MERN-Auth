const express = require("express");
const {
  AuthUser,
  ragisterUser,
  updateUserProfile,
  getUserProfile,
  logoutUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/auth", AuthUser);
router.post("/", ragisterUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
