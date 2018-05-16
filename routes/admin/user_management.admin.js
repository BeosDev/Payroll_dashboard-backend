var express = require('express');
var router = express.Router();
var userController = require('../../controllers/user');

/* GET users listing. */
router.get('/', function(req, res) {
  userController.getUsers(req,res);
});

router.post('/add',function(req,res){
  userController.addUser(req,res);
})

router.post('/update',function(req,res){
  userController.updateUser(req,res);
})

router.get('/delete',function(req,res){
  userController.deleteUser(req,res);
})
module.exports = router;
