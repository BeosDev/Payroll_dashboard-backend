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

function addEmployment(req, res) {
    req.body['Employee_ID'] = req.body['idEmployee'];
    var dataMySql = {
        'idEmployee': null,
        'Employee Number': null,
        'Last Name': null,
        'First Name': null,
        'SSN': null,
        'Pay Rate': null,
        'Pay Rates_idPay Rates': null,
        'Vacation Days': null,
        'Paid To Date': null,
        'Paid Last Year': null,
    }
    var dataMssql = {
        'Employee_ID': null,
        'Employment_Status': null,
        'Hire_Date': null,
        'Workers_Comp_Code': null,
        'Termination_Date': null,
        'Rehire_Date': null,
        'Last_Review_Date': null
    }
    for (var key in dataMySql)
        if (dataMySql.hasOwnProperty(key))
            dataMySql[key] = req.body[key];
    for (var key in dataMssql)
        if (dataMssql.hasOwnProperty(key))
            dataMssql[key] = req.body[key];
 //   console.log(dataMySql);
    var emMYSQL = new employMYSQL.addEmployee(dataMySql);
    var emMSSQL = new employMSSQL.addEmployment(dataMssql);
    res.end('done');
}

function updateEmployment(req, res) {
    req.body['Employee_ID'] = req.body['idEmployee'];
    var dataMySql = {
        'idEmployee': null,
        'Employee Number': null,
        'Last Name': null,
        'First Name': null,
        'SSN': null,
        'Pay Rate': null,
        'Pay Rates_idPay Rates': null,
        'Vacation Days': null,
        'Paid To Date': null,
        'Paid Last Year': null,
    }
    var dataMssql = {
        'Employee_ID': null,
        'Employment_Status': null,
        'Hire_Date': null,
        'Workers_Comp_Code': null,
        'Termination_Date': null,
        'Rehire_Date': null,
        'Last_Review_Date': null
    }
    for (var key in dataMySql)
        if (dataMySql.hasOwnProperty(key))
            dataMySql[key] = req.body[key];
    for (var key in dataMssql)
        if (dataMssql.hasOwnProperty(key))
            dataMssql[key] = req.body[key];
 //   console.log(dataMySql);
    var emMYSQL = new employMYSQL.updateEmployee(dataMySql,dataMySql.idEmployee);
    var emMSSQL = new employMSSQL.updateEmployment(dataMssql,dataMssql.Employee_ID);
    res.end('done');
}

function deleteEmployment(req, res) {
    var emMSSQL = new employMSSQL.deleteEmployment(req.query['id']);
    var emMYSQL = new employMYSQL.deleteEmployee(req.query['id']);
    res.end('done');
}

module.exports = {
    getEmployment,
    addEmployment,
    updateEmployment,
    deleteEmployment
}