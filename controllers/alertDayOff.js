var employeeModel  = require('../models/mydb_mysql/employee');
var persionModel = require('../models/hr_sqlserver/personal');

function getAlertDayOff(req,res){
    var alertData = new employeeModel.getAlertDayOff();
    alertData.once('results',function(results){
        res.render('AccumulatedVacation',{data:results});
    });
    alertData.once('error',function(error){
        res.render('error');
    })
}

module.exports = {
    getAlertDayOff
}