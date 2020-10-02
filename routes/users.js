const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, usersCtrl.index);
router.get("/:id", checkAuth, usersCtrl.getOne);
router.get('/:userId/favState', checkAuth, usersCtrl.showUserFavState)
router.put('/', checkAuth, usersCtrl.updateUser)
router.post('/friends', checkAuth, usersCtrl.addFavState)


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;