var router = require('express').Router();
var auth = require('./auth');

//router.use(auth.authUser);

router.use('/login',require('./login'));
router.use('/logout',require('./logout'));
router.use('/admin',require('./admin'));
router.use('/alert-aniversary',require('./alert_anniversary'));
router.use('/alert-benefit-plan',require('./alert_benefit_plan'));
router.use('/alert-day-offs',require('./alert_day_offs'));
// router.use('/alert-employee-birthday',require('./alert_employee_birthday'));
// router.use('/average-benefit-paid',require('./average_benefit_paid.admin'));
 router.use('/total-earning',require('./total_earning'));
// router.use('/vacation-day',require('./vacation_day'));
router.use('/home',require('./home'));
module.exports = router;
