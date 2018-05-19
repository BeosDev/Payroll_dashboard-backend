var personModel = require('../../models/hr_sqlserver/personal');
var benefitPlanModel = require('../../models/hr_sqlserver/benefit_plans');

function getPerson() {

}

function getPersonPage(req,res) {
    var personData = new personModel.getPersons();
    var benefitPlanData = new benefitPlanModel.getBenefitPlans();
    personData.once('results', function (persons) {
        benefitPlanData.once('results', function(benefitPlans){
            res.render('admin/personal', { data: persons.recordset, data1: benefitPlans.recordset });
        });
        benefitPlanData.once('error', function (error) {
            console.log(error);
            res.render('error');
        });
    });
    personData.once('error', function (error) {
        console.log(error);
        res.render('error');
    });
}

function addPerson(req,res) {
    var shareholderStatus = '0';
    if(req.body.Add_Shareholder_Status == 'on')
        shareholderStatus = '1';
    var addData = {
        Employee_ID: parseInt(req.body.Add_Employee_ID),
        First_Name: req.body.Add_First_Name,
        Last_Name:req.body.Add_Last_Name,
        Middle_Initial:req.body.Add_Middle_Initial,
        Address1:req.body.Add_Address1,
        Address2:req.body.Add_Address2,
        City:req.body.Add_City,
        State:req.body.Add_State,
        Zip:req.body.Add_Zip!=''?parseInt(req.body.Add_Zip):0,
        Email:req.body.Add_Email,
        Phone_Number:req.body.Add_Phone_Number,
        Social_Security_Number:req.body.Add_Social_Security_Number,
        Drivers_License:req.body.Add_Drivers_License,
        Marital_Status:req.body.Add_Marital_Status,
        Gender: req.body.Add_Gender,
        Shareholder_Status:shareholderStatus,
        Benefit_Plans: parseInt(req.body.Add_Benefit_Plans),
        Ethnicity:req.body.Add_Ethnicity,
    }
    var addResult = personModel.addPerson(addData);
    addResult.once('results',function(results){
        console.log(results);
        res.redirect('/admin/personal');
    });
    addResult.once('error',function(error){
        res.redirect('error');
    });
}

function editPerson(req,res) {
    var shareholderStatus = '1';
    if(req.body.Edit_Shareholder_Status != '1')
        shareholderStatus = '0';
        console.log(req.body.Edit_G);
    var editData = {
        First_Name: req.body.Edit_First_Name,
        Last_Name:req.body.Edit_Last_Name,
        Middle_Initial:req.body.Edit_Middle_Initial,
        Address1:req.body.Edit_Address1,
        Address2:req.body.Edit_Address2,
        City:req.body.Edit_City,
        State:req.body.Edit_State,
        Zip:req.body.Edit_Zip!=''?parseInt(req.body.Edit_Zip):0,
        Email:req.body.Edit_Email,
        Phone_Number:req.body.Edit_Phone_Number,
        Social_Security_Number:req.body.Edit_Social_Security_Number,
        Drivers_License:req.body.Edit_Drivers_License,
        Marital_Status:req.body.Edit_Marital_Status,
        Gender:req.body.Edit_G != 0?'1':'0',
        Shareholder_Status:shareholderStatus,
        Benefit_Plans:parseInt(req.body.Edit_Benefit_Plan),
        Ethnicity:req.body.Edit_Ethnicity,
    }
    var editResult = personModel.updatePerson(editData,req.body.Edit_Employee_ID);
    editResult.once('results',function(results){
        res.redirect('/admin/personal');
    });
    editResult.once('error',function(error){
        res.redirect('error');
    });
}

function deletePerson(req,res) {
    var deleteResults = personModel.deletePerson(req.params.id);
    deleteResults.once('results',function(results){
        res.redirect('/admin/personal');
    });
    deleteResults.once('error',function(error){
        res.redirect('error');
    });
}

module.exports = {
    getPerson,
    getPersonPage,
    addPerson,
    editPerson,
    deletePerson
}
