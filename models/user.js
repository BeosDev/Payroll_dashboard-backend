var conn = require('../config/mysql');
conn.createConnection('muser');
function getUsers() {
    var query = 'SELECT * FROM user';
    return new conn.executeQuery(query);
}

function getUser(username){
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

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getUser
}