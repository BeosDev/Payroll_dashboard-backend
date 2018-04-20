var passport = require('passport');
LocalStrategy = require('passport-local').Strategy,
    UserModel = require('../models/user');

module.exports = function () {

    passport.serializeUser(function (user, done) {
        done(null, user);
    })

    passport.deserializeUser(function (user, done) {
        done(null, user);
    })

    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    }, function (username, password, done) {
        var User = new UserModel.getOneUser(username);
        User.once('result', function (result) {
            console.log(result.length);
            if (result.length !== 0 && UserModel.validPassword(password, result[0].password))
                return done(null, result[0]);
            return done(null, false);
        })
        User.once('error', function (err) {
            return done(null, false);
        })
    }))
}