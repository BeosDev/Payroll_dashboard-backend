var personModel = require('../../models/hr_sqlserver/personal');
var benefitPlanModel = require('../../models/hr_sqlserver/benefit_plans');

function getPerson() {

}

function getPersonPage(req,res) {
    var personData = new personModel.getPersons();
    return res.render('admin/personal', { data: [], data1: [] });
    personData.once('results', function (persons) {
        console.log(persons);
        var benefitPlanData = new benefitPlanModel.getBenefitPlans();
        benefitPlanData.once('results', function(benefitPlans){
            res.render('admin/personal', { data: persons.recordset, data1: benefitPlans.recordset });
        });
        benefitPlanData.once('error', function (error) {
            console.log(error);
            return res.render('admin/personal', { data: [], data1: [] });
        });
    });
    personData.once('error', function (error) {
        console.log(error);
        return res.render('admin/personal', { data: [], data1: [] });
    });
}

function addPerson(req,res) {
    var addData = {
        Employee_ID: res.body.Add_Employee_ID,
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
    var addResult = personModel.addPerson(addData);
    addResult.once('results',function(results){
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