var router = require('express').Router();
var jobHistoryController = require('../../controllers/admin/job_history.admin');

router.get('/',function(req,res,next){
    jobHistoryController.getJobHistoryPage(req,res);
});

router.post('/add',function(req,res,next){
    jobHistoryController.addJobHistory(req,res);
});

module.exports = router;