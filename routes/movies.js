const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
	
// GET /movies/new
router.get('/new', moviesCtrl.new);
	
module.exports = router;