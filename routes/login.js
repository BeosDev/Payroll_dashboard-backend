var router = require('express').Router();
var passport = require('passport');
router.get('/', function (req, res, next) {
    res.render('login');
})

router.post('/', passport.authenticate('local-login', {
    successRedirect: '/total-earning',
    failureRedirect: '/login',
}))

module.exports = router;