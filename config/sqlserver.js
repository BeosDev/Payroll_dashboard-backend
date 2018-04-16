const sql = require('mssql');
var EventEmitter = require('events').EventEmitter;
const config = {
    user: 'sa',
    password: '',
    server: 'DESKTOP-GN3V8MM\SQLEXPRESS',
    database: 'HR'
}
function executeQuery(query,parameters) {
    var emitter = this;
    sql.connect(config, err => {
        if (err){
            emitter.emit('error',err);
            throw err;
        }
        console.log('rn');
        new sql.Request().query(query, (err, result) => {
            if (err){
                emitter.emit('error',err);
                throw err;
            }
            console.log('ok');
            emitter.emit('result',result);
        })
    })
    sql.on('error', err => {
        emitter.emit('error',err);
    })
}

var cmd = `INSERT INTO Benefit_Plans
SET Plan_Name = 'ANH',
, Deductable = 12
, Percentage_CoPay = 1 `;
executeQuery.prototype = new EventEmitter();
var k = new executeQuery(cmd);
k.on('result',result =>{
    console.log(result);
})
k.on('error',err => console.log(err));
module.exports = {
    executeQuery
}