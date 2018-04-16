var conn = require('../config/mysql');
conn.createConnection('muser');
function getRoles() {
    var query = 'SELECT * FROM role';
    return new conn.executeQuery(query);
}

function addRole(paramters) {
    var query = 'INSERT INTO role SET ?;';
    return new conn.executeQuery(query, paramters);
}

function deleteRole(roleId){
    var query = `DELETE FROM role WHERE roleId = ${roleId}`;
    return new conn.executeQuery(query);
}

function updateRole(paramters, roleId) {
    var query = 'UPDATE `user` SET ? WHERE `roleId` = ' + `${roleId};`;
    return new conn.executeQuery(query, paramters);
}



module.exports = {
    getRoles,
    addRole,
    deleteRole,
    updateRole
}