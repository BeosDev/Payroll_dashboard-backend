var employMSSQL = require('../../models/hr_sqlserver/employment');
var employMYSQL = require('../../models/mydb_mysql/employee');

function getEmployment(req, res) {
    res.render('/admin/Employment');
    // var emMSSQL = new employMSSQL.getEmployments();
    // emMSSQL.once('results', function (dataMSSQL) {
    //     var emMYSQL = employMYSQL.getEmployees();
    //     emMYSQL.once('results', function (dataMYSQL) {
    //         var data = [];
    //         console.log(dataMSSQL.recordset.length);
    //         dataMSSQL = dataMSSQL.recordset;
    //         for (var i = 0; i < dataMSSQL.length; i++) {
    //             var dataRaw = {
    //                 Employee_ID: dataMYSQL[i]['Employee_ID'],
    //                 Employee_Number: dataMYSQL[i]['Employee Number'],
    //                 First_Name: dataMYSQL[i]['First Name'],
    //                 Last_Name: dataMYSQL[i]['Last Name'],
    //                 SSN: dataMYSQL[i]['SSN'],
    //                 Pay_Rate: dataMYSQL[i]['Pay Rate'],
    //                 Payrate_ID: dataMYSQL[i]['Pay Rates_idPay Rates'],
    //                 Vacation_Date: dataMYSQL[i]['Vacation Days'],
    //                 Paid_To_Date: dataMYSQL[i]['Paid To Date'],
    //                 Paid_Last_Year: dataMYSQL[i]['Paid Last Year'],
    //                 Employment_Status: dataMSSQL[i]['Employment_Status'],
    //                 Hire_Date: dataMSSQL[i]['Hire_Date'],
    //                 Workers_Comp_Code: dataMSSQL[i]['Workers_Comp_Code'],
    //                 Termination_Date: dataMSSQL[i]['Termination_Date'],
    //                 Rehire_Date: dataMSSQL[i]['Rehire_Date'],
    //                 Last_Review_Date: dataMSSQL[i]['Last_Review_Date']
    //             }
    //             data.push(dataRaw);
    //         }
    //         console.log(data);
            
    //     })
    // })
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
    var emMYSQL = new employMYSQL.updateEmployee(dataMySql, dataMySql.idEmployee);
    var emMSSQL = new employMSSQL.updateEmployment(dataMssql, dataMssql.Employee_ID);
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