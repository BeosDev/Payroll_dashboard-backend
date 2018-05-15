var payRateModel = require('../../models/mydb_mysql/pay_rates');

function getPayRatePage(req,res){
    var payRatePage = new  payRateModel.getPayRates()
    payRatePage.once('results',function(results){
        //console.log(results);
        if(results.length > 0){
            res.render('admin/payRate',{data:results});
        }
        else{
            res.render('error')
        }
    });
    payRatePage.once('error',function(error){
        res.render('error');
    })
}
//getPayRatePage();
module.exports={
    getPayRatePage    
}