var benefitModel = require('../../models/hr_sqlserver/benefit_plans');

function getBenefitPlan(req,res){
    var benefitData = new benefitModel.getBenefitPlans();
    benefitData.once('results',function(results){
        console.log(results.recordsets[0]);
        res.render('admin/benefitPlan',{data:results.recordsets[0]});
    });
    benefitData.once('error',function(error){
        //console.log(results.recordsets[0].length);
        res.render('error');
    });
}
function addBenefitPlan(req,res){
    var benefitData = new benefitModel.addBenefitPlans(req.body);
    benefitData.once('results',function(results){
       
        res.redirect('/admin/benefit-plans')
    });
    benefitData.once('error',function(error){
        //console.log(results.recordsets[0].length);
        res.render('error');
    });
}

function updateBenefitPlan(req,res){
    var data = {
        'Plan_Name':req.body.Plan_Name,
        'Deductable':req.body.Deductable,
        'Percentage_CoPay':req.body.Percentage_CoPay
    }
    var benefitData = new benefitModel.updateBenefitPlans(data,req.body.Benefit_Plan_ID);
    benefitData.once('results',function(results){
       
        res.redirect('/admin/benefit-plans')
    });
    benefitData.once('error',function(error){
        //console.log(results.recordsets[0].length);
        res.render('error');
    });
}

function deleteBenefitPlan(req,res){
    console.log(req.query['Benefit_Plan_ID']);
    var benefitData = new benefitModel.deleteBenefitPlans(req.query['Benefit_Plan_ID']);
    benefitData.once('results',function(results){
        return res.json({data:true});
    })
    benefitData.once('error',function(err){
        return res.json({data:false});
    })
}
module.exports = {
    getBenefitPlan,
    addBenefitPlan,
    updateBenefitPlan,
    deleteBenefitPlan
}