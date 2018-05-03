var bcrypt = require('bcrypt-nodejs');

var conn = require('../config/mysql');
conn.createConnection('muser');
function getUsers() {
    var query = 'SELECT * FROM user';
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

// var k = new addUser({username: 'admin',password: genHash('admin'),name: 'linh',roleId: 1});
// k.on('result',res => console.log(res));
module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getOneUser,
    genHash,
    validPassword
}