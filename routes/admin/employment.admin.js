var router = require('express').Router();
var employmentController = require('../../controllers/employment');

router.get('/',function(req,res){
    employmentController.getDataEmployment(req,res);
})

module.exports = router;