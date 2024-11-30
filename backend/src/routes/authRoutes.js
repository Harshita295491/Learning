const express = require("express");
const passport = require("passport");
const {
  handleGoogleCallback,
  getProfile,
  refreshAccessToken,
  logout,
} = require("../controllers/login.controller");
const ensureAuthenticated = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send('<h1>Login</h1><p><a href="/auth/google">Login with Google</a></p>');
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email", "openid"],
    accessType: "offline",
    prompt: "consent",
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { 
    successRedirect:"http://localhost:5174/dashboard",
    failureRedirect: "http://localhost:5174/login" }),
  handleGoogleCallback
);

// router.get("/login/success", async(req,res)=>{
//   console.log("reqqq", req.user)
// })

router.get("/login/success", async (req, res) => {
  console.log("Session User",req.user)
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: "User authenticated successfully",
      user: req.user,
    });
  } else {
    return res.status(403).json({ success: false, message: "No user found" });
  }
});

router.get("/profile", ensureAuthenticated, getProfile);
router.get("/refresh", refreshAccessToken);
router.get("/logout", logout);

module.exports = router;
