var employMSSQL = require('../models/hr_sqlserver/employment');

function getAnniversary(req,res){
    var employ = new employMSSQL.getEmployments();
    employ.once('results',function(data){
        var anniversaries = [];
        data.forEach(element => {
            var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
            if (utc === element.Hire_Day){
                anniversaries.push()
            }
        });
    })
}