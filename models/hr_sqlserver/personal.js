var conn = require('../../config/sqlserver');


function getPersons() {
    var query = {
        type: 'select',
        table: 'Personal',
        parameter: {},
        whereParameter: {},
    }
    return new conn.executeQuery(query);
}

function getOnePerson(id) {
    var query = {
        type: 'select',
        table: 'Personal',
        parameter: {},
        whereParameter: {'Employee_ID':id},
    }
    return new conn.executeQuery(query);
}

function addPerson(paramters) {
    var query = {
        type: 'insert',
        table: 'Personal',
        parameter: paramters,
        whereParameter: {},
    }
    return new conn.executeQuery(query, paramters);
}

function updatePerson(paramters, id) {
    var query = {
        type: 'update',
        table: 'Personal',
        parameter: paramters,
        whereParameter: {'Employee_ID': id},
    }
    return new conn.executeQuery(query, paramters);
}

function deletePerson(id) {
    var query = {
        type: 'delete',
        table: 'Personal',
        parameter: {},
        whereParameter: {'Employee_ID': id},
    }
    return new conn.executeQuery(query);
}


function getTotalEarningPerson()
{
    var query = 'select Personal.Employee_ID,Personal.Gender,Personal.Shareholder_Status,Personal.Ethnicity,Employment.Employment_Status,Job_History.Department'
                +' from Employment inner join Personal on Employment.Employee_ID = Personal.Employee_ID'
                +' inner join Job_History on Personal.Employee_ID = Job_History.Employee_ID';
    return new conn.executeQuery(query);
}

module.exports = {
    getPersons,
    updatePerson,
    deletePerson,
    addPerson,
    getOnePerson,
    getTotalEarningPerson
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
