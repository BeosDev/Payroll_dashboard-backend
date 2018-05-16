var router = require('express').Router();
var AniversayController = require('../controllers/alert_anniversary');
router.get('/',function(req,res){

    AniversayController.getAnniversary(req,res);
});

module.exports = router;