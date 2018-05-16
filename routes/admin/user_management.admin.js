var express = require('express');
var router = express.Router();
var userController = require('../../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userController.getUsers(req,res);
});

module.exports = router;
