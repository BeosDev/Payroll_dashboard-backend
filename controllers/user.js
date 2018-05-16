var UserModel = require('../models/user');

function getUsers(req,res){
    var user = new UserModel.getUserAndRole();
    user.once('results',ress => console.log(ress));
    user.once('error',ress => console.log(ress));
    // user.once('results',function(results){
    //     if (results.length > 0){
    //         res.render('admin/userManager',{data:results});
    //     }
    //     else
    //     res.render('admin/userManager',{data:[]});
    // })
    // user.once('error',function(err){
    //     res.render('admin/userManager',{data:[]});
    // })
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