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
        'Job_Category':req.body.Add_Job_Category,
        'Location':req.body.Add_Location,
        'Pay_Period':req.body.Add_Pay_Period,
        
        'Hazardous_Training':req.body.Add_Hazardous_Trainning
    }
    if(req.body.Add_Hours_Per_Week!=null && req.body.Add_Hours_Per_Week!='')
        addData['Hours_per_Week']=req.body.Add_Hours_Per_Week;
    if(req.body.Add_Supervisor!=null && req.body.Add_Supervisor!='')
        addData['Supervisor']=req.body.Add_Supervisor;
    if(req.body.Add_Department_Code!=null && req.body.Add_Department_Code!='')
        addData['Departmen_Code']=req.body.Add_Department_Code;
    if(req.body.Add_Salary_Type!=null && req.body.Add_Salary_Type!='')
        addData['Salary_Type']=req.body.Add_Salary_Type;
    
    
    
    var addResult = jobHistoryModel.addJobHistory(addData);

    addResult.once('results',function(results){
      res.redirect('/admin/job-history');
    });
    addResult.once('error',function(error){
        res.redirect('error');
      });
    

}

function editJobHistory(req,res){
    
    editData = {
        'Employee_ID':req.body.Edit_Employee_ID,
        'Department':req.body.Edit_Department,
        'Division':req.body.Edit_Division,
        'Start_Date':req.body.Edit_Start_Date,
        'End_Date':req.body.Edit_End_Date,
        'Job_Title':req.body.Edit_Job_Title,
        'Job_Category':req.body.Edit_Job_Category,
        'Location':req.body.Edit_Location,
        'Pay_Period':req.body.Edit_Pay_Period,
        'Hazardous_Training':req.body.Edit_Hazardous_Trainning
    }
    if(req.body.Edit_Hours_Per_Week!=null && req.body.Edit_Hours_Per_Week!='')
        editData['Hours_per_Week']=req.body.Edit_Hours_Per_Week;
    if(req.body.Edit_Supervisor!=null && req.body.Edit_Supervisor!='')
        editData['Supervisor']=req.body.Edit_Supervisor;
    if(req.body.Edit_Department_Code!=null && req.body.Edit_Department_Code!='')
        editData['Departmen_Code']=req.body.Edit_Department_Code;
    if(req.body.Edit_Salary_Type!=null && req.body.Edit_Salary_Type!='')
        editData['Salary_Type']=req.body.Edit_Salary_Type;
    
    
    
    var editResult = jobHistoryModel.updateJobHistory(editData,req.body.Edit_ID);
    console.log('====================================');
    editResult.once('results',function(results){
      res.redirect('/admin/job-history');
    });
    editResult.once('error',function(error){
        res.redirect('error');
      });
}

function deleteJobHistory(req,res){
    var deleteResult = jobHistoryModel.deleteJobHistory(req.params.id);
    deleteResult.once('results',function(results){
        res.send({data:'true'});
    });
    deleteResult.once('error',function(error){
        res.send({data:'false'});
    });

    
}

//getJobHistoryPage(null,null);
module.exports = {
    getJobHistoryPage,
    addJobHistory,
    deleteJobHistory,
    editJobHistory
}