var employMSSQL = require('../models/hr_sqlserver/employment');
var employMYSQL = require('../models/mydb_mysql/employee');

function getAnniversary(req, res) {
    var k = new employMSSQL.getEmployments();
    k.once('results', data => {
        var anniversaries = [];
        console.log(data);
        data.recordset.forEach(element => {
            var utc = new Date().toLocaleDateString();
            var dateMssql = new Date(element.Hire_Day).toLocaleDateString();
            if (utc === dateMssql) {
                anniversaries.push(element);
            }
        });
        if (anniversaries.length > 0) {
            var em = new employMYSQL.getEmployees();
            var alerts = [];
            em.once('results', function (data) {
                for (var i = 0; i < data; i++) {
                    anniversaries.forEach(element => {
                        if (data[i].idEmployee == element[Employee_ID]) {
                            alerts.push(data[i]);
                        }
                    })
                }
                if (alerts.length > 0) {
                    res.render('HiringAnniversary', {
                        data: []
                    });
                }
            });
        } else {
            res.render('HiringAnniversary', {
                data: []
            })
        }
    });
    k.once('error', err => {
        console.log(err);
        res.render('HiringAnniversary', {
            data: []
        })
    })
}

module.exports = {
    getAnniversary
}