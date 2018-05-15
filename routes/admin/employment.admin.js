var router = require('express').Router();
var employmentController = require('../../controllers/admin/employment.admin');

router.get('/',function(req,res){
    employmentController.getEmployment(req,res);
})

module.exports = router;