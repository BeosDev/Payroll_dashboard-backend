var conn = require('../../config/sqlserver');


function getBenefitPlans() {
    var query = {
        type: 'select',
        table: 'Benefit_Plans',
        parameter: {},
        whereParameter: {},
    }
    return new conn.executeQuery(query);
}

function getBenefitPlan(id) {
    var query = {
        type: 'select',
        table: 'Benefit_Plans',
        parameter: {},
        whereParameter: {'Benefit_Plan_ID':id},
    }
    return new conn.executeQuery(query);
}

function addBenefitPlans(paramters) {
    var query = {
        type: 'insert',
        table: 'Benefit_Plans',
        parameter: paramters,
        whereParameter: {},
    }
    return new conn.executeQuery(query, paramters);
}

function updateBenefitPlans(paramters, id) {
    var query = {
        type: 'update',
        table: 'Benefit_Plans',
        parameter: paramters,
        whereParameter: {'Benefit_Plan_ID': id},
    }
    return new conn.executeQuery(query, paramters);
}

function deleteBenefitPlans(id) {
    var query = 'DELETE FROM Benefit_Plans WHERE Benefit_Plan_ID = ' + `${id};`;
    var query = {
        type: 'delete',
        table: 'Benefit_Plans',
        parameter: {},
        whereParameter: {'Benefit_Plan_ID': id},
    }
    return new conn.executeQuery(query);
}

module.exports = {
    getBenefitPlans,
    updateBenefitPlans,
    deleteBenefitPlans,
    addBenefitPlans,
    getBenefitPlan
}
/*
[BenefitPlan_ID] 
[Plan_Name]
[Deductable]
[Percentage_CoPay]

*/
