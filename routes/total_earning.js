var router = require('express').Router();
var totalEarningController = require('../controllers/total_earning');

router.get('/',function(req,res,next){
    totalEarningController.getTotalEarningPage(req,res);
    //res.render('total_earning');
});


module.exports = router;
