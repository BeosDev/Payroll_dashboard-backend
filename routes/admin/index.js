var router = require('express').Router();
// var auth = require('../auth');

//router.use(auth.authAdmin);

router.use('/employment',require('./employment.admin'));
router.use('/pay-rate',require('./pay_rates.admin'));
// router.use('/benefit-plans',require('./benefit_plans.admin'));
router.use('/job-history',require('./job_history.admin'));
router.use('/user-management',require('./user_management.admin'));
// router.use('/pay-rates',require('./pay_rates.admin'));
// router.use('/personal',require('./personal.admin'));

module.exports = router;