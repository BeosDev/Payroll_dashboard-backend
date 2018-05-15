var jobHistoryModel = require('../../models/hr_sqlserver/job_history');


function getJobHistoryPage(req,res){
    var jobHistoryData = new jobHistoryModel.getJobHistory();
    jobHistoryData.once('results',function(results){
        //console.log(results.recordsets[0].length);
        res.render('admin/jobHistory',{data:results.recordsets[0]});
    });
    jobHistoryData.once('error',function(error){
        //console.log(results.recordsets[0].length);
        res.render('error');
    });
}

function addJobHistory(req,res){
    
    addData = {
        'Employee_ID':req.body.Add_Employee_ID,
        'Department':req.body.Add_Department,
        'Division':req.body.Add_Division,
        'Start_Date':req.body.Add_Start_Date,
        'End_Date':req.body.Add_End_Date,
        'Job_Title':req.body.Add_Job_Title,
        'Supervisor':req.body.Add_Supervisor,
        'Job_Category':req.body.Add_Job_Category,
        'Location':req.body.Add_Location,
        'Departmen_Code':req.body.Add_Department_Code,
        'Salary_Type':req.body.Add_Salary_Type,
        'Pay_Period':req.body.Add_Pay_Period,
        'Hours_per_Week':req.body.Add_Hours_Per_Week,
        'Hazardous_Training':req.body.Add_Hazardous_Trainning
    }
    var addResult = jobHistoryModel.addJobHistory(addData);

    //addResult.once('results',function(results){
        //res.send('insert completed');
      //  console.log('completed');
      res.redirect('/admin/job-history');
    //});
    

}

function editJobHistory(req,res){
    //.addData = {

   // }
}

function deleteJobHistory(req,res){
    //.addData = {

   // }
}

//getJobHistoryPage(null,null);
module.exports = {
    getJobHistoryPage,
    addJobHistory,
    deleteJobHistory,
    editJobHistory
}