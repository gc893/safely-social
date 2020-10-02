const User = require("../models/user");

module.exports = {
  index,
  getOne,
  updateUser,
  addFavState
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function getOne(req, res) {
  User.findById(req.params.id)
  .populate('favState')
  .then((user) => res.json(user));
}

function addFavState(req, res){
  User.findById(req.user._id)
  .then(user => {
    // if(req.body.favState === req.user._id){
    //   res.json(user)
    // }else{
      user.favState.push(req.params.state)
      user.save().then(
        res.json(user))
    }
   )
 }

function updateUser(req, res){
  User.findByIdAndUpdate(req.user._id, req.body, {new: true})
  .then(user => 
    {  
    res.json(user)}
    )
}