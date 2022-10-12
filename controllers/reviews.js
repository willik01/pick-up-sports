const Movie = require('../models/movie')

module.exports = {
    create,
    delete: deleteReview
}

function create(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        movie.reviews.push(req.body)
        movie.save(function(err) {
            res.redirect(`/movies/${movie._id}`)
        })
    })
}

function deleteReview(req, res, next) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Movie.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(movie) {
      // Rogue user!
      if (!movie) return res.redirect('/movies');
      // Remove the review using the remove method available on Mongoose arrays
      movie.reviews.remove(req.params.id);
      // Save the updated movie
      movie.save().then(function() {
        // Redirect back to the movie's show view
        res.redirect(`/movies/${movie._id}`);
      }).catch(function(err) {
        // Let Express display an error
        return next(err);
        // res.redirect(`/movies/${movie._id}`);
      });
    });
  }