var express = require('express');
var router = express.Router();
var benefit = require('../models/hr_sqlserver/benefit_plans');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('benefit_Plans', { title: 'benefit plans',data:{} });
  
});

module.exports = router;