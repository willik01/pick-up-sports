const Pickup = require('../models/pickup');
// const Performer = require('../models/performer')

module.exports = {
  index,
  show,
  new: newPickup,
  create
};

function index(req, res) {
    console.log("in the Pickup Index Function!")
  Pickup.find({}, function(err, pickups) {
    res.render('pickups/index', { title: 'View Pick-Ups', pickups });
  });
  
}

function show(req, res) {
    console.log("in the Pickup SHOW Function!")
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
}

function newPickup(req, res) {
    // const pickupGameEnums = Pickup.schema.path('gameRequested').schema.path('userGame').enumValues;
    // const pickupSkillLevelEnums = Pickup.schema.path('gameRequested').schema.path('skillLevel').enumValues;
    // console.log('enumS in ejs: ', pickupGameEnums, pickupSkillLevelEnums); 
    console.log("in the Pickup newPickup Function!")
  
  res.render('pickups/new', { title: 'Create New Pick-Up' });
  // res.render('pickups/new', { data: {title: 'Create New Pick-Up', pickupSkillLevelEnums: pickupSkillLevelEnums, pickupGameEnums: pickupGameEnums} });
  // res.render("index", { data: { title: "Express", name: "Arnaud" } })
}

function create(req, res) {
  req.body.creatorUser = req.user._id;
  const pickup = new Pickup(req.body)
  pickup.gameRequested.push(req.body)
  pickup.save(function(err) {
    // one way to handle errors
    console.log('error: ', err)
    if (err) return res.redirect('/pickups/new');
    // for now, redirect right back to new.ejs
    res.redirect(`/pickups`);
  });
}