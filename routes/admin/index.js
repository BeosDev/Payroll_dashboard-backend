var router = require('express').Router();
var auth = require('../auth');

router.use(auth.authAdmin);

router.use('/alert-aniversary',require('./alert_anniversary.admin'));
router.use('/alert-benefit-plan',require('./alert_benefit_plan.admin'));
router.use('/alert-day-offs',require('./alert_day_offs.admin'));
router.use('/alert-employee-birthday',require('./alert_employee_birthday.admin'));
router.use('/average-benefit-paid',require('./average_benefit_paid.admin'));
router.use('/total-earning',require('./total_earning.admin'));
router.use('/user-management',require('./user_management.admin'));
router.use('/vacation-day',require('./vacation_day.admin'));

module.exports = router;
