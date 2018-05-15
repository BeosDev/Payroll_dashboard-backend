module.exports = {
    isLoggined: function(req,res,next){
        if (req.isAuthenticated()) {
            next();
        }
        res.redirect('/');
    },
    isAdmin: function (req, res, next) {
        if (req.user.roleId === 1) {
            next();
        }
        res.redirect('/');
    },
    isUser: function (req,res,next){
        if (req.user.roleId === 2) {
            next();
        }
        res.redirect('/');
    }
}