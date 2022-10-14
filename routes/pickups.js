const express = require('express');
const router = express.Router();
const pickupsCtrl = require('../controllers/pickups');
const isLoggedIn = require('../config/auth')

// All routes "start with" /movies (from server.js)

// GET /pick-ups (index functionality)
router.get('/', pickupsCtrl.index);
// GET /pick-ups/new (new functionality)
router.get('/new', isLoggedIn, pickupsCtrl.new);
// GET /pick-ups/:id (show functionality)
router.get('/:id', pickupsCtrl.show);
// POST /pick-ups (create functionality)
router.post('/', isLoggedIn, pickupsCtrl.create);

module.exports = router;