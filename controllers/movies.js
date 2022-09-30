const Movie = require('../models/movie')

module.exports = {
    new: newMovie,
    create
}

function newMovie(req, res) {
    res.render('movies/new')
}

function create(req, res) {
    console.log(req.body)
    res.redirect('movies/new')
}