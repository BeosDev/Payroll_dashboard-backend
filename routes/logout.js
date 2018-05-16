var router = require('express').Router();

router.get('/logout', function (req, res) {
    req.logout();
});
module.exports = router;