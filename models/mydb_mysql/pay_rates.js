var conn = require('../../config/mysql');
conn.createConnection('mydb');

function getPayRates() {
    var query = 'Select `idPay_Rates` as idPay_Rates,`Pay_Rate_Name` as Pay_Rate_Name,Value,`Tax_Percentage` as Tax_Percentage,`Pay_Type` as Pay_Type, `Pay_Amount` as Pay_Amount, `PT_Level_C` as PT_Level from `pay_rates`';
    return new conn.executeQuery(query);
}

function addPayRate(paramters) {
    var query = 'INSERT INTO `pay_rates` SET ?;';
    return new conn.executeQuery(query, paramters);
}

function updatePayRate(paramters, id) {
    var query = 'UPDATE `pay_rates` SET ? WHERE `idPay_Rates` = ' + `${id};`;
    return new conn.executeQuery(query, paramters);
}

function deletePayRate(id) {
    var query = 'DELETE FROM `pay_rates` WHERE `idPay_Rates` = ' + `${id};`;
    return new conn.executeQuery(query);
}
function getTotalEarningPage(){
    var query = 'Select `Employee_Number` as EmployeeNumber,Value from `pay_rates` inner join employee on `pay_rates`.`idPay_Rates` = employee.`Pay Rates_idPay_Rates`';
    return new conn.executeQuery(query);
}

function getTopId(){
    var query = 'Select `idPay Rates` as topId from `pay_rates` order by `idPay_Rates` desc LIMIT 1';
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
    getTotalEarningPage,
    getTopId
}