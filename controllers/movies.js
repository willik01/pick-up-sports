// var Movie = require('../models/movie');
// const Performer = require('../models/performer')

// module.exports = {
//   index,
//   show,
//   new: newMovie,
//   create
// };

// function index(req, res) {
//   Movie.find({}, function(err, movies) {
//     res.render('movies/index', { title: 'All Movies', movies });
//   });
  
// }

// function show(req, res) {
//   Movie.findById(req.params.id)
//     .populate('cast').exec(function(err, movie) {
//       // console.log(movie)
//       Performer.find(
//         {_id: {$nin: movie.cast}},
//         function(err, performers) {
//           res.render('movies/show', { title: 'Movie Detail', movie, performers });
//         }
//       )
//   });
// }

// function newMovie(req, res) {
//   res.render('movies/new', { title: 'Add Movie' });
// }

// function create(req, res) {
//   // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
//   // remove whitespace next to commas
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   var movie = new Movie(req.body);
//   movie.save(function(err) {
//     // one way to handle errors
//     if (err) return res.redirect('/movies/new');
//     // for now, redirect right back to new.ejs
//     res.redirect(`/movies/${movie._id}`);
//   });
// }