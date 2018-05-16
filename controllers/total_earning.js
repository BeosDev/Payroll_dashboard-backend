var hr_employment = require('../models/hr_sqlserver/employment');
var hr_person = require("../models/hr_sqlserver/personal");
var pay_rates = require("../models/mydb_mysql/pay_rates");

function getTotalEarningPage(req,res)
{
    var getPerson = new hr_person.getTotalEarningPerson();
    getPerson.once('results',function(persopnResults){
        var getPayRate = new pay_rates.getTotalEarningPage();
        getPayRate.once('results',function(PayrateResults){
           //console.log(PayrateResults);
            //console.log(persopnResults.recordsets[0]);
            //console.log(PayrateResults.length);
            //console.log(persopnResults.recordsets[0].length);
            var arr=[];
            for(var i=0;i<persopnResults.recordsets[0].length;i++){
                for(var j=0;j<PayrateResults.length;j++){
                    //console.log(persopnResults.recordsets[0][i].Employee_ID)
                    if(persopnResults.recordsets[0][i].Employee_ID == PayrateResults[j].EmployeeNumber){
                        var item = {
                            'Employee_ID': persopnResults.recordsets[0][i].Employee_ID,
                            'Gender': persopnResults.recordsets[0][i].Gender,
                            'Shareholder_Status' : persopnResults.recordsets[0][i].Shareholder_Status,
                            'Ethnicity' : persopnResults.recordsets[0][i].Ethnicity,
                            'Employee_Status' : persopnResults.recordsets[0][i].Employment_Status,
                            'Department' : persopnResults.recordsets[0][i].Department,
                            'Value' : PayrateResults[j].Value
                        }
                        //console.log(item);
                        arr.push(item);
                    }
                   
                }
            }
            console.log(arr);
            var shareHolder=0,male=0,female=0,ethnicity=0,fulltime=0,parttime=0,marD =0,techD=0,PayD=0;
            for(var i=0;i<arr.length;i++){
                if(arr[i].Shareholder_Status==true) shareHolder+=arr[i].Value;

                if(arr[i].Gender == true) male+= arr[i].Value;
                else female+=arr[i].Value;

                if(arr[i].Employee_Status == 'Fulltime') fulltime+= arr[i].Value;
                else parttime+=arr[i].Value;

                if(arr[i].Department == 'Marketing') marD+=arr[i].Value;
                else if(arr[i].Department == 'Technical') techD += arr[i].Value;
                else PayD+=arr[i].Value;
                if(arr[i].Ethnicity == '1') ethnicity+=arr[i].Value;
            }
            var data = {
                'shareHolder' : shareHolder,
                'male':male,
                'female' : female,
                'ethnicity' : ethnicity,
                'fulltime' : fulltime,
                'parttime' : parttime,
                'marD' : marD,
                'techD' :techD,
                'payD' : PayD 
            }

            res.render('total_earning',{data:data});
        })
        
    });
}

//getTotalEarningPage();

module.exports = {
    getTotalEarningPage
}