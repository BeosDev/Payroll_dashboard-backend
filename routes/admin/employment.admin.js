var router = require('express').Router();
var employmentController = require('../../controllers/admin/employment.admin');

router.get('/',function(req,res){
    res.render('admin/jobHistory');
    // employmentController.getEmployment(req,res);
})

router.post('/add',function(req,res){
    employmentController.addEmployment(req,res);
})

router.post('/update',function(req,res){
    employmentController.updateEmployment(req,res);
})

router.get('/delete',function(req,res){
    employmentController.deleteEmployment(req,res);
})
module.exports = router;