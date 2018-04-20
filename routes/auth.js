module.exports = {
    authAdmin: function (req, res, next) {
        if (req.isAuthenticated() && req.user.roleId === 1) {
            next();
        }
        res.redirect('/');
    },
    authUser: function (req,res,next){
        if (req.isAuthenticated() && req.user.roleId === 2) {
            next();
        }
        res.redirect('/');
    }
}