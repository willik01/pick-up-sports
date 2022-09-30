const Movie = require('../models/movie')

module.exports = {
    new: newMovie,
    create,
    index
}

function newMovie(req, res) {
    res.render('movies/new')
}

function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing
    req.body.cast = req.body.cast.trim()
    if(req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/)
    const movie = new Movie(req.body)
    movie.save(function(err) {
        // if we don't redirect, the new page will be shown
        // with /movies in the address bar
        if(err) return res.redirect('/movies/new')
        res.redirect('/movies/new')
    })
}

function index(req, res) {
    Movie.find({}, function(err, movies) {
        res.render('movies/index', {
            movies
        })
    })
}