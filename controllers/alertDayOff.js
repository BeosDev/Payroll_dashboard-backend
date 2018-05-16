var employeeModel  = require('../models/mydb_mysql/employee');
var persionModel = require('../models/hr_sqlserver/personal');
var employmentModel = require('../models/hr_sqlserver/employment');
function getAlertDayOff(req,res){
    var alertData = new employeeModel.getAlertDayOff();
    alertData.once('results',function(results){
        var hre = persionModel.getPersons();
        hre.once('results',function(hrResults){
            //console.log(hrResults.recordsets[0].length);
            var t=[];
            for(var i=0;i<results.length;i++)
            {
                for(var j=0;j<hrResults.recordsets[0].length;j++){
                    if(results[i].employee_number == hrResults.recordsets[0][j].Employee_ID)
                    {
                        var tt={'phone':hrResults.recordsets[0][j].Phone_Number,'email':hrResults.recordsets[0][j].Email,'address':hrResults.recordsets[0][j].Address1}
                        t.push(tt);
                    }
                }
            }
            //console.log(phone);
            res.render('AccumulatedVacation',{data:results,t:t});
        });

        
    });
    alertData.once('error',function(error){
        res.render('error');
    })
}

module.exports = {
    getAlertDayOff
}