const express = require("express");
require('dotenv').config();
const router = express.Router();
const { registerUser, loginUser} = require("../controllers/AuthController");
const { registerLimiter, loginLimiter } = require("../utils/rateLimiter");

router.post("/register",registerLimiter, registerUser );
router.post("/login",loginLimiter, loginUser );

module.exports = router;