var express = require('express');
var router = express.Router();
var benefit = require('../models/hr_sqlserver/benefit_plans');
/* GET home page. */
router.get('/', function(req, res, next) {
  benefit(function(data){
    console.log(data);
    res.render('benefit_Plans', { title: 'benefit plans',data:data });
  })
  
});

module.exports = router;