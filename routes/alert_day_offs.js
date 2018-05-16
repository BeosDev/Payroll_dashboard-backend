var router = require('express').Router();
var dayOffController = require('../controllers/alertDayOff')

router.get('/',function(req,res,next){
    console.log(12313);
    dayOffController.getAlertDayOff(req,res);
});

module.exports = router;