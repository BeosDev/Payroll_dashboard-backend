var conn = require('../../config/sqlserver');


function getJobHistory() {
    var query = 'Select * From Job_History; ';
    return new conn.executeQuery(query);
}

function addJobHistory(paramters) {
    var query = 'INSERT INTO Job_History SET ?;';
    return new conn.executeQuery(query, paramters);
}

function updateJobHistory(paramters, id) {
    var query = 'UPDATE Job_History SET ? WHERE ID = ' + `${id};`;
    return new conn.executeQuery(query, paramters);
}

function deleteJobHistory(id) {
    var query = 'DELETE FROM Job_History WHERE ID = ' + `${id};`;
    return new conn.executeQuery(query);
}

var k = new getJobHistory();
k.on('result',res => {
    console.log(res);
})

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
