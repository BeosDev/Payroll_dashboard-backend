var employMSSQL = require('../../models/hr_sqlserver/employment');
var employMYSQL = require('../../models/mydb_mysql/employee');

function getEmployment(req, res) {
    var emMSSQL = new employMSSQL.getEmployments();
    emMSSQL.once('results', function (dataMSSQL) {
        var emMYSQL = employMYSQL.getEmployees();
        emMYSQL.once('results', function (dataMYSQL) {
            console.log('ok');
            console.log(dataMSSQL);
            console.log(dataMYSQL);
            res.end('done');
        }) 
    })
}

function addEmployment(req,res){
    var emMSSQL = new employMSSQL.addEmployment(req.body);
    var emMYSQL = new employMYSQL.addEmployee(req.body);
    res.end('done');
}

function updateEmployment(req,res){
    var emMSSQL = new employMSSQL.updateEmployment(req.body,req.body.idEmployee);
    var emMYSQL = new employMYSQL.updateEmployee(req.body,req.body.idEmployee);
    res.end('done');
}

function deleteEmployment(req,res){
    var emMSSQL = new employMSSQL.deleteEmployment(req.body.idEmployee);
    var emMYSQL = new employMYSQL.deleteEmployee(req.body.idEmployee);
    res.end('done');
}

module.exports = {
    getEmployment,
    addEmployment,
    updateEmployment,
    deleteEmployment
}