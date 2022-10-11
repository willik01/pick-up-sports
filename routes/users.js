var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');
const isLoggedIn = require('../config/auth')

// All routes "start with" /users (from server.js)


router.get('/:id', usersCtrl.show);
router.put('/:id', isLoggedIn, usersCtrl.update);


module.exports = router;