var UserModel = require('../../models/user');

function getUsers(req,res){
    var user = new UserModel.getUsers();
    user.once('results',function(data){
        console.log(data);
        res.end('done');
    })
    user.once('error',function(){
        res.end('error');
    })
}

function addUser(req,res){
    var user = new UserModel.addUser(req.body);
    user.once('results',function(data){
        res.end('done');
    })
    user.once('error',function(){
        res.end('error');
    })
}

function updateUser(req,res){
    var user = new UserModel.updateUser(req.bod,req.body.user.username);
    user.once('results',function(data){
        res.end('done');
    })
    user.once('error',function(){
        res.end('error');
    })
}

function deleteUser(req,res){
    var user = new UserModel.deleteUser(req.user.username);
    user.once('results',function(data){
        res.end('done');
    })
    user.once('error',function(){
        res.end('error');
    })
}

module.exports = {
    addUser,
    getUsers,
    deleteUser,
    updateUser
}