const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
	
// All the routes already start with '/movies'
router.get('/new', moviesCtrl.new);
router.post('/', moviesCtrl.create)
router.get('/', moviesCtrl.index)
	
module.exports = router;