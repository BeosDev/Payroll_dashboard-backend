var router = require('express').Router();
var payRateController = require('../../controllers/admin/pay_rates.admin');

router.get('/',function(req,res,next){
    payRateController.getPayRatePage(req,res);
});


module.exports = router;