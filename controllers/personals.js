var PersonModel = require('../models/hr_sqlserver/personal');

function getPersons(req,res,next){
    var person = PersonModel.getPersons();
    person.once('results', function(data){
        if(data.length>0){
            res.render("admin/adminPerson",{
                title: "Person Management - CDIO",
                data: data
            },function(err, html){
                res.end(html);
            })
        }
        else res.end("error");
    });
    person.once('error',function(err){
        res.end('err');
    })
}

/*function getPerson(req,res,next){
    var id;
    var person = PersonModel.getOnePerson(id);
    person.once('results', function(data){
        if(data.length>0){
            res.render("admin/adminPerson",{
                title: "Person Management - CDIO",
                data: data
            },function(err, html){
                res.end(html);
            })
        }
        else res.end("error");
    });
    person.once('error',function(err){
        res.end('err');
    })
}*/


function addPerson(req,res,next){
    var person = PersonModel.addPerson(req.body);
    person.once('results',function(results){
        if (results.affectedRows > 0)
            res.redirect('/admin/persons');
        else res.end('error');
    });
    person.once('error',function(err){
        res.end('error');
    })
}


function deletePerson(req,res,next){
    var person = PersonModel.deletePerson(req.params.id);
    person.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/admin/persons');
        else res.end('error');
    });
    person.once('error',function(err){
        res.end('error');
    })
}

function updatePerson(req,res,next){
    var person = PersonModel.updatePerson(req.body,req.body.U_ID);
    person.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/admin/persons');
        else res.end('error');
    });
    person.once('error',function(err){
        res.end('error');
    })
}

module.exports = {
    getPersons,
    deletePerson,
    updatePerson,
    addPerson
}