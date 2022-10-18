const User = require('../models/user');
const Pickup = require('../models/pickup');
// const Performer = require('../models/performer')

module.exports = {
  index,
  show,
  new: newPickup,
  create
};

function index(req, res) {
  Pickup.find({}, function(err, pickups) {
    res.render('pickups/index', { title: 'View Pick-Ups', pickups });
  });
  
}

function show(req, res) {
  Pickup.findById(req.params.id, function(err, pickup) {
//Trying to figure out how to show pickup's owner. Got the data below. How to pass to view for rendering? 
    //  console.log ('creator userobject', pickup.creatorUser._id) 
     User.findById(pickup.creatorUser._id, function(err, puser){
      // console.log ('creator userobject', user)
      res.render('pickups/show', { title: 'Pickup Detail', pickup, puser });
     }) 
  
  });
}

function newPickup(req, res) {
    // const pickupGameEnums = Pickup.schema.path('gameRequested').schema.path('userGame').enumValues;
    // const pickupSkillLevelEnums = Pickup.schema.path('gameRequested').schema.path('skillLevel').enumValues;
    // console.log('enumS in ejs: ', pickupGameEnums, pickupSkillLevelEnums);
  
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
    res.redirect(`/pickups`);
    // for now, redirect right back to new.ejs
  });
}