var hr_employment = require('../models/hr_sqlserver/employment');
var hr_person = require("../models/hr_sqlserver/personal");
var pay_rates = require("../models/mydb_mysql/pay_rates");

function getTotalEarning()
{
    var getPayRate = new pay_rates.getPayRates();
    getPayRate.on('results',function(results){
        //console.log(results.length);
       // console.log(results);
    });

    var getPerson = new hr_person.getPersons();
    getPerson.on('results',function(results){
        console.log(results);
    });
}

getTotalEarning();