var bcrypt = require('bcrypt-nodejs');
var conn = require('../config/mylocal');
function getUsers() {
    var query = 'SELECT * FROM user';
    return new conn.executeQuery(query);
}

function getUserAndRole(){
    var query = `SELECT * FROM user INNER JOIN role ON user.roleId = role.roleId;`
    return new conn.executeQuery(query);
}

function getOneUser(username){
    var query = `SELECT * FROM user WHERE username = '${username}'`;
    return new conn.executeQuery(query);
}

function addUser(paramters) {
    var query = 'INSERT INTO user SET ?;';
    return new conn.executeQuery(query, paramters);
}

function deleteUser(username){
    var query = `DELETE FROM user WHERE username = ${username}`;
    return new conn.executeQuery(query);
}

function updateUser(paramters, username) {
    var query = 'UPDATE `user` SET ? WHERE `username` = ' + `${username};`;
    return new conn.executeQuery(query, paramters);
}

function genHash(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(6));
}

function validPassword(rawPw,pwHashed){
    return bcrypt.compareSync(rawPw,pwHashed);
}

var k = new getUserAndRole();
k.once('results',re => console.log(re));
module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getOneUser,
    genHash,
    validPassword,
    getUserAndRole
}