const User = require("../models/user");

module.exports = {
  index,
  getOne
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function getOne(req, res) {
  User.findById(req.params.id)
  .then((user) => res.json(user));
}