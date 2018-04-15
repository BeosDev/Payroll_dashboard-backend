var conn = require('../../config/sqlserver');

function getEmployments(){
    var cmd = "select * from Employment";
    conn.executeQuery(cmd);
}

function getEmployment(id){
    var cmd = "select * from Employment where Employee_ID = "+`${id}`;
    conn.executeQuery(cmd);
}

function addEmployment(employment){
    var cmd = "insert Employment set ?"
    conn.executeQuery(cmd,employment);
}

function updateEmployment(id){
    var cmd = "insert Employment set ? where Employee_ID = "+`${id}`;
    conn.executeQuery(cmd);
}

function deleteEmployment(id){
    var cmd = "delete from Employment here Employee_ID = "+`${id}`;
    conn.executeQuery(cmd);
}