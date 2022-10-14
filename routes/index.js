var express = require('express');
var router = express.Router();
const passport = require('passport')

// Don't want a welcome/home page in this app
router.get('/', function(req, res, next) {
  res.redirect('/pickups');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  prompt: "select_account"
}))

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/pickups',
    failureRedirect: '/pickups'
  }
))

// OAuth Logout Route
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if(err) return next(err)
    res.redirect('/pickups')
  })
})

module.exports = router;