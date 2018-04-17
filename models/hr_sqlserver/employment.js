var conn = require('../../config/sqlserver');

function getEmployments(){
    var query = {
        type: 'select',
        table: 'Employment',
        parameter: {},
        whereParameter: {},
    }
    return new conn.executeQuery(query);
}

function getEmployment(id){
    var query = {
        type: 'select',
        table: 'Employment',
        parameter: {},
        whereParameter: {'Employee_ID':id},
    }
    return new conn.executeQuery(query);
}

function addEmployment(paramters){
    var query = {
        type: 'insert',
        table: 'Job_History',
        parameter: {paramters},
        whereParameter: {},
    }
    return new conn.executeQuery(query, paramters);
}

function updateEmployment(id){
    var query = {
        type: 'update',
        table: 'Employment',
        parameter: {paramters},
        whereParameter: {'Employee_ID': id},
    }
    return new conn.executeQuery(query, paramters);
}

function deleteEmployment(id){
    var query = {
        type: 'delete',
        table: 'Employment',
        parameter: {},
        whereParameter: {'Employee_ID': id},
    }
    return new conn.executeQuery(query);
}