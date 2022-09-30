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
    for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
    }
    const movie = new Movie(req.body)
    movie.save(function(err) {
        // if we don't redirect, the new page will be shown
        // with /movies in the address bar
        if(err) {
            console.log(err)
            return res.redirect('/movies/new')
        }
        res.redirect('/movies')
    })
}

function index(req, res) {
    Movie.find({}, function(err, movies) {
        res.render('movies/index', {
            movies
        })
    })
}