const User = require('../models/user');

module.exports = {
  show,
  update,
  addGame,
};

function show(req, res) {
    User.findById(req.params.id, function(err, user){ 
      res.render('users/show', { title: 'User Profile Detail', user, req}) 
        
    }) 
  };

  function update(req, res) {
    User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {new: true},
      function(err, user) {
        // if (err || !user) return res.redirect('/:id/users');
        res.redirect(`/users/${req.params.id}`)
      })
  }

  function addGame(req, res) {
    User.findById(req.params.id, function(err, user) {
      // Update req.body to contain user info
      req.body.userId = req.user._id;
      req.body.userName = req.user.name;
      // Add the new userGame
      console.log('req.user: ', req.user, 'req.body', req.body)
      user.games.push(req.body);
      user.save(function(err) {
        console.log('error: ', err)
        res.redirect(`/users/${user._id}`);
      });
    });
  }
 
// // working updateOne  
// function update(req, res) {
//   User.updateOne(
//     {_id: req.params.id}, 
//     req.body,
//     // {location: req.body.location, gender: req.body.gender},
//       function(err, user) {
//         if (err || !user) return res.redirect('/');
//         res.redirect(`/users/${req.params.id}`)
//       })
// }

// // working findByIdAndUpdate
//   function update(req, res) {
//     User.findByIdAndUpdate(
//       req.params.id, 
//       req.body, 
//       {new: true},
//       function(err, user) {
//         if (err || !user) return res.redirect('/');
//         res.redirect(`/users/${req.params.id}`)
//       })
//   }

// //working findOneAndUpdate
// function update(req, res) {
//   User.findOneAndUpdate(
//     req.user._id, 
//     req.body, 
//     {new: true},
//     function(err, user) {
//       if (err || !user) return res.redirect('/');
//       res.redirect(`/users/${req.params.id}`)
//       console.log('req*body', req.body, 'req.user._id:> ', req.user._id, 'req.params.id:> ', req.params.id)
//     })
// }
// console.log('req*body', req.body, 'req.user._id:> ', req.user._id, 'req.params.id:> ', req.params.id)

