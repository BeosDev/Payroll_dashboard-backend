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

function addPayRate(req,res){
    
    var top = new payRateModel.getTopId();
    top.once('results',function(top){
        if(top.length > 0){
            var addData = {
                'idPay Rates' : (parseInt(top[0].topId)+1),
                'Pay Rate Name': req.body.Add_Payrate_Name,
                'Value' : req.body.Add_Value,
                'Tax Percentage' : req.body.Add_Tax_Percentage,
                'Pay Type':req.body.Add_Pay_Type,
                'Pay Amount':req.body.Add_Pay_Amount,
                'PT - Level C':req.body.Add_PT_Level
            }
            var addResult = new payRateModel.addPayRate(addData);
            addResult.once('results',function(results){
                res.redirect('/admin/pay-rate');
            });
            addResult.once('error',function(error){
                res.render('error');
            });
        }
        else{
            var addData = {
                'Pay Rate Name': req.body.Add_Payrate_Name,
                'Value' : req.body.Add_Value,
                'Tax Percentage' : req.body.Add_Tax_Percentage,
                'Pay Type':req.body.Add_Pay_Type,
                'Pay Amount':req.body.Add_Pay_Amount,
                'PT - Level C':req.body.Add_PT_Level
            }
            var addResult = new payRateModel.addPayRate(addData);
            addResult.once('results',function(results){
                res.redirect('/admin/pay-rate');
            });
            addResult.once('error',function(error){
                res.render('error');
            });
        }
        
    });
}

function editPayRate(req,res){
    var editData = {
        'Pay Rate Name': req.body.Edit_Payrate_Name,
        'Value' : req.body.Edit_Value,
        'Tax Percentage' : req.body.Edit_Tax_Percentage,
        'Pay Type':req.body.Edit_Pay_Type,
        'Pay Amount':req.body.Edit_Pay_Amount,
        'PT - Level C':req.body.Edit_PT_Level
    }
    var editResult = new payRateModel.updatePayRate(editData,req.body.Edit_Payrate_ID);
    editResult.once('results',function(results){
        res.redirect('/admin/pay-rate');
    });
    editResult.once('error',function(error){
        res.render('error');
    });
}

function deletePayRate(req,res){
    var deleteResult = new payRateModel.deletePayRate(req.params.id);
    deleteResult.once('results',function(results){
        console.log("delete completed");
    });
    deleteResult.once('error',function(error){
        res.render('error');
    })
}

module.exports={
    getPayRatePage,
    addPayRate,
    editPayRate,
    deletePayRate
}