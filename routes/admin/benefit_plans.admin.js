var router = require('express').Router();
var benefitPlanController = require('../../controllers/admin/benefit_plans.admin');

router.get('/',function(req,res){
    benefitPlanController.getBenefitPlan(req,res);
})

router.post('/add',function(req,res){
    benefitPlanController.addBenefitPlan(req,res);
})

router.post('/update',function(req,res){
    benefitPlanController.updateBenefitPlan(req,res);
})

router.get('/delete',function(req,res){
    benefitPlanController.deleteBenefitPlan(req,res);
})

module.exports = router;