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
    var gender = '0', shareholderStatus = '0';
    if(req.body.Add_Gender == 'on')
        gender = '1';
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
        Gender:gender,
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
    var editData = {
        First_Name: res.body.Add_First_Name,
        Last_Name:res.body.Add_Last_Name,
        Middle_Initial:res.body.Add_Middle_Initial,
        Address1:res.body.Add_Address1,
        Address2:res.body.Add_Address2,
        City:res.body.Add_City,
        State:res.body.Add_State,
        Zip:res.body.Add_Zip,
        Email:res.body.Add_Email,
        Phone_Number:res.body.Add_Phone_Number,
        Social_Security_Number:res.body.Add_Social_Security_Number,
        Drivers_License:res.body.Add_Drivers_License,
        Marital_Status:res.body.Add_Marital_Status,
        Gender:res.body.Add_Gender,
        Shareholder_Status:res.body.Add_Shareholder_Status,
        Benefit_Plans:res.body.Add_Benefit_Plans,
        Ethnicity:res.body.Add_Ethnicity,
    }
    var editResult = personModel.editPerson(editData,res.body.Add_Employee_ID);
    editResult.once('results',function(results){
        res.redirect('/admin/personal');
    });
    editResult.once('error',function(error){
        res.redirect('error');
    });
}

function deletePerson(req,res) {
    var deleteResults = personModel.deletePerson(res.param.id);
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
