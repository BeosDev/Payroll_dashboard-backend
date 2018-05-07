var UserModel = require('../models/user');

function getUsers(req,res){
    var user = new UserModel.getUsers();
    user.on('results',function(results){
        if (results.length > 0){
            console.log(results);
            res.end('ok');
        }
        else
            res.end('No data');
    })
    user.on('error',function(err){
        res.end('err');
    })
}

function addUser(req,res){
    if (req.body.password !== undefined){
        req.body.password = UserModel.genHash(req.body.password);
    }
    var user = UserModel.addUser(req.body);
    user.on('results',function(results){
        res.redirect('/');
    })
    user.on('error',function(err){
        res.end('error');
    })
}

function updateUser(req,res){
    if (req.body.password !== undefined){
        req.body.password = UserModel.genHash(req.body.password);
    }
    var user = UserModel.updateUser(req.body,req.body.username);
    user.on('results',function(results){
        res.redirect('/');
    })
    user.on('error',function(err){
        res.end('error');
    })
}

function deleteUser(req,res){
    var user = UserModel.deleteUser(req.body.username);
    user.on('results',function(results){
        res.redirect('/');
    })
    user.on('error',function(err){
        res.end('error');
    })
}

module.exports = {
    updateUser,
    getUsers,
    deleteUser,
    addUser
}