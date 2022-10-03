var express = require('express');
var router = express.Router();

// Don't want a welcome/home page in this app
router.get('/', function(req, res, next) {
  res.redirect('/movies');
});

module.exports = router;