const User = require('../models/user');

module.exports = {
  show,
  update,
};

function show(req, res) {
    User.findById(req.params.id, function(err, user){
       console.log(user)  
      res.render('users/show', { title: 'User Profile Detail', user}) 
        
    }) 
  };

  function update(req, res) {
    console.log("updating user", 'req: ', req)
    
  }
 
