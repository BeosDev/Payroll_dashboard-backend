var conn = require('../../config/mysql');
conn.createConnection('mydb');

function getPayRates() {
    var query = 'Select `idPay Rates` as idPay_Rates,`Pay Rate Name` as Pay_Rate_Name,Value,`Tax Percentage` as Tax_Percentage,`Pay Type` as Pay_Type, `Pay Amount` as Pay_Amount, `PT - Level C` as PT_Level from `pay rates`';
    return new conn.executeQuery(query);
}

function addPayRate(paramters) {
    var query = 'INSERT INTO `pay rates` SET ?;';
    return new conn.executeQuery(query, paramters);
}

function updatePayRate(paramters, id) {
    var query = 'UPDATE `pay rates` SET ? WHERE `idPay Rates` = ' + `${id};`;
    return new conn.executeQuery(query, paramters);
}

function deletePayRate(id) {
    var query = 'DELETE FROM `pay rates` WHERE `idPay Rates` = ' + `${id};`;
    return new conn.executeQuery(query);
}
function getTotalEarningPage(){
    var query = 'Select `Employee Number` as EmployeeNumber,Value from `pay rates` inner join employee on `pay rates`.`idPay Rates` = employee.`Pay Rates_idPay Rates`';
    return new conn.executeQuery(query);
}
/*
var para = {
    'idPay Rates': 5,
    'Pay Rate Name' : 'test',
    'Value': 11 ,
    'Tax Percentage' : 2,
    'Pay Type': 1,
    'Pay Amount' : 10000,
    'PT - Level C': 5
}

var k = new getPayRates();
k.on('results',function(results){
    console.log(results);
})*/



module.exports = {
    getPayRates,
    updatePayRate,
    deletePayRate,
    addPayRate,
    getTotalEarningPage
}