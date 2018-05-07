var employMSSQL = require('../models/hr_sqlserver/employment');
var employMYSQL = require('../models/mydb_mysql/employee');
var EventEmitter = require('events').EventEmitter;

function getDataEmployment(req, res) {
    var emMSSQL = new employMSSQL.getEmployments();
    var emMYSQL = employMYSQL.getEmployees();
    emMSSQL.once('results', function (dataMSSQL) {
        var emitter = new EventEmitter();
        emMYSQL.once('results', function (dataMYSQL) {
            console.log('ok');
            console.log(dataMSSQL);
            console.log(dataMYSQL);
            res.end('done');
        })
        
    })

}

module.exports = {
    getDataEmployment
}