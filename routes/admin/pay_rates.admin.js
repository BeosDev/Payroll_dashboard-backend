var router = require('express').Router();
var payRateController = require('../../controllers/admin/pay_rates.admin');

router.get('/',function(req,res,next){
    payRateController.getPayRatePage(req,res);
});

router.post('/add',function(req,res,next){
    payRateController.addPayRate(req,res);
});

router.post('/edit',function(req,res,next){
    payRateController.editPayRate(req,res);
});

router.get('/delete/:id',function(req,res,next){
    payRateController.deletePayRate(req,res);
});

module.exports = router;