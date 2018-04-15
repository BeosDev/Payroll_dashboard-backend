var conn = require('../config/mysql');
conn.createConnection('user');
function getUsers() {
    var query = 'SELECT * FROM user';
    return new conn.executeQuery(query);
}

function addUser(paramters) {
    var query = 'INSERT INTO user SET ?;';
    return new conn.executeQuery(query, paramters);
}

function deleteUser(id){
    var query = `DELETE FROM user WHERE U_ID = ${id}`;
    return new conn.executeQuery(query);
}

function updateUser(paramters, id) {
    var query = 'UPDATE `user` SET ? WHERE `U_ID` = ' + `${id};`;
    return new conn.executeQuery(query, paramters);
}

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser
}