var conn = require("../../config/mysql")
conn.createConnection('mydb');
/*
`idEmployee` int(11) NOT NULL,
  `Employee Number` int(10) unsigned NOT NULL,
  `Last Name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `First Name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `SSN` decimal(10,0) NOT NULL,
  `Pay Rate` varchar(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Pay Rates_idPay Rates` int(11) NOT NULL,
  `Vacation Days` int(11) DEFAULT NULL,
  `Paid To Date` decimal(2,0) DEFAULT NULL,
  `Paid Last Year` decimal(2,0) DEFAULT NULL
*/

function getEmployees(){
    var query = "select * from `employee`"
    return new conn.executeQuery(query);
}

function getEmployee(id){
    var query = 'select * from `employee` where'+ `${id}`;
    return new conn.executeQuery(query);
}

function addEmployee(){
    var query = 'INSERT INTO `employee` SET ?;';
    return new conn.executeQuery(query, paramters);
}

function updateEmployee(id){
    var query = 'UPDATE `employee` SET ? WHERE `idEmployee` = ' + `${id};`;
    return new conn.executeQuery(query, paramters);
}

function deleteEmployee(id){
    var query = 'DELETE FROM `employee` WHERE `idEmployee` = ' + `${id};`;
    return new conn.executeQuery(query);
}