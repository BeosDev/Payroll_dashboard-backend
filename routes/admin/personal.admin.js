var router = require('express').Router();
var personController = require('../../controllers/admin/personal.admin');

router.get('/',function(req,res,next){
    personController.getPersonPage(req,res);
});

router.post('/add',function(req,res,next){
    personController.addPerson(req,res);
});

router.post('/edit',function(req,res,next){
    personController.editPerson(req,res);
});

router.get('/delete/:id',function(req,res,next){
    personController.deletePerson(req,res);
});

module.exports = router;