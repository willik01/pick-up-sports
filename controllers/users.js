const User = require('../models/user');

module.exports = {
  show,
  update,
};

function show(req, res) {
    User.findById(req.params.id, function(err, user){
      //  console.log(user)  
      res.render('users/show', { title: 'User Profile Detail', user, req}) 
        
    }) 
  };

  function update(req, res) {
    User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {new: true},
      function(err, user) {
        console.log('req*body', req.body, 'req.user._id:> ', req.user._id, 'req.params.id:> ', req.params.id)
        // if (err || !user) return res.redirect('/:id/users');
        res.redirect(`/users/${req.params.id}`)
      })
  }
  

  //working findOneAndUpdate
  function update(req, res) {
    User.findOneAndUpdate(
      req.user._id, 
      req.body, 
      {new: true},
      function(err, user) {
        if (err || !user) return res.redirect('/');
        res.redirect(`/users/${req.params.id}`)
        console.log('req*body', req.body, 'req.user._id:> ', req.user._id, 'req.params.id:> ', req.params.id)
      })
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
//   function update(req, res) {
//     User.findOneAndUpdate(
//       {_id: req.params.id}, 
//       req.body, 
//       {new: true},
//       function(err, user) {
//         if (err || !user) return res.redirect('/');
//         res.redirect(`/users/${req.params.id}`)
//       })
//   }
// console.log('req*body', req.body, 'req.user._id:> ', req.user._id, 'req.params.id:> ', req.params.id)

