var UserModel = require('../models/user');

function getUsers(req,res){
    var user = new UserModel.getUserAndRole();
    user.once('results',function(results){
        if (results.length > 0){
            res.render('admin/userManager',{data:results});
        }
        else
        res.render('admin/userManager',{data:[]});
    })
    user.once('error',function(err){
        res.render('admin/userManager',{data:[]});
    })
}

function addUser(req,res){
    var user = UserModel.addUser(req.body);
    user.once('results',function(results){
        res.redirect('/admin/user-management');
    })
    user.once('error',function(err){
        res.redirect('/admin/user-management');
    })
}

function updateUser(req,res){
    var user = new UserModel.updateUser(req.body,req.body.username);
    user.once('results',function(results){
        res.redirect('/');
    })
    user.once('error',function(err){
        res.redirect('/admin/user-management');
    })
}

function deleteUser(req,res){
    console.log(req.query['username']);
    var user = new UserModel.deleteUser(req.query['username']);
    user.once('results',function(results){
        return res.json({data:true});
    })
    user.once('error',function(err){
        return res.json({data:false});
    })
}

module.exports = {
    updateUser,
    getUsers,
    deleteUser,
    addUser
}