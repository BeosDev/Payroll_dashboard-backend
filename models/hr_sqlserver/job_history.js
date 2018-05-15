var conn = require('../../config/sqlserver');


function getJobHistory() {
    var query = {
        type: 'select',
        table: 'Job_History',
        parameter: {},
        whereParameter: {},
    }
    return new conn.executeQuery(query);
}

function addJobHistory(paramters,fn) {
    var query = {
        type: 'insert',
        table: 'Job_History',
        parameter: paramters,
        whereParameter:{},
    }
    return new conn.executeQuery(query,paramters);
}

function updateJobHistory(paramters, id) {
    var query = {
        type: 'update',
        table: 'Job_History',
        parameter: paramters,
        whereParameter: {'ID': id},
    }
    console.log(query);
    return new conn.executeQuery(query, paramters);
}

function deleteJobHistory(id) {
    var query = 'DELETE FROM Job_History WHERE ID = ' + `${id};`;
    var query = {
        type: 'delete',
        table: 'Job_History',
        parameter: {},
        whereParameter: {'ID': id},
    }
    return new conn.executeQuery(query);
}
//updateJobHistory({'Job_Title':'update'},58);
module.exports = {
    getJobHistory,
    updateJobHistory,
    deleteJobHistory,
    addJobHistory
}

/*
[ID]
[Employee_ID]
[Department]
[Division]
[Start_Date]
[End_Date]
[Job_Title]
[Supervisor]
[Job_Category]
[Location]
[Departmen_Code]
[Salary_Type]
[Pay_Period]
[Hours_per_Week]
[Hazardous_Training]
*/
