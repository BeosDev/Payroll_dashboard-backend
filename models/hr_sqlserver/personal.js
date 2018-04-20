var conn = require('../../config/sqlserver');


function getPersonals() {
    var query = {
        type: 'select',
        table: 'Personal',
        parameter: {},
        whereParameter: {},
    }
    return new conn.executeQuery(query);
}

function getOnePersonal(id) {
    var query = {
        type: 'select',
        table: 'Personal',
        parameter: {},
        whereParameter: {'Employee_ID':id},
    }
    return new conn.executeQuery(query);
}

function addPersonal(paramters) {
    var query = {
        type: 'insert',
        table: 'Personal',
        parameter: paramters,
        whereParameter: {},
    }
    return new conn.executeQuery(query, paramters);
}

function updatePersonal(paramters, id) {
    var query = {
        type: 'update',
        table: 'Personal',
        parameter: paramters,
        whereParameter: {'Employee_ID': id},
    }
    return new conn.executeQuery(query, paramters);
}

function deletePersonal(id) {
    var query = 'DELETE FROM Personals WHERE Employee_ID = ' + `${id};`;
    var query = {
        type: 'delete',
        table: 'Personal',
        parameter: {},
        whereParameter: {'Employee_ID': id},
    }
    return new conn.executeQuery(query);
}

module.exports = {
    getPersonals,
    updatePersonal,
    deletePersonal,
    addPersonal,
    getOnePersonal
}
//deletePersonal(2)
/*
table Personal
[Employee_ID]
[First_Name]
[Last_Name]
[Middle_Initial]
[Address1]
[Address2]
[City]
[State]
[Zip]
[Email]
[Phone_Number]
[Social_Security_Number]
[Drivers_License]
[Marital_Status]
[Gender]
[Shareholder_Status]
[Benefit_Plans]
[Ethnicity]
*/
