const router = require("express").Router();
const userModel = require("../Models/userModel");
const auth = require("../Authentication/auth");

// Register a new user
router.post("/register", userModel.registerUser);

router.post("/login", userModel.loginUser);

// router.get("/me", auth.verifyToken, userModel.getUserData);
router.get("/profile", auth.verifyToken, userModel.getUserData);

router.get("/", userModel.getAllUsers);

module.exports = router;
