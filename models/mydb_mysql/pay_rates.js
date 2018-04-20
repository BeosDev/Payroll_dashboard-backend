var conn = require('../../config/pool_mysql');
conn.createConnection('mydb');

function getPayRates() {
    var query = 'Select * from `pay rates`';
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

var k = new deletePayRate(5);
k.on('results',function(results){
    console.log(results);
})
*/


module.exports = {
    getPayRates,
    updatePayRate,
    deletePayRate,
    addPayRate
}