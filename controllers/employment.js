var employMSSQL = require('../models/hr_sqlserver/employment');
var employMYSQL = require('../models/mydb_mysql/employee');

function getDataEmployment(req,res){
    var emMSSQL = new employMSSQL.getEmployments();
  //  var emMYSQL = new emMYSQL.getEmployees();
    emMSSQL.once('results',function(dataMSSQL){
   //     emMYSQL.once('results',function(dataMYSQL){
   //         console.log(dataMSSQL);
            console.log(dataMSSQL);
            res.end('done');
   //     })
    })
}

module.exports = {
    getDataEmployment
}

