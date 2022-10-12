var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');
const isLoggedIn = require('../config/auth')

// All routes "start with" /users (from server.js)


router.get('/:id', usersCtrl.show);
router.put('/:id', isLoggedIn, usersCtrl.update);
router.post('/:id/games', isLoggedIn, usersCtrl.addGame);
router.delete('/:id', isLoggedIn, usersCtrl.delete);

module.exports = router;