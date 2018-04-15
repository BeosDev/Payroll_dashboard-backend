const sql = require('mssql');
var EventEmitter = require('events').EventEmitter;
const config = {
    user: 'sa',
    password: '',
    server: 'HELLOWORLD\\SQLEXPRESS',
    database: 'HR'
}
function executeQuery() {
    var emitter = this;
    sql.connect(config, err => {
        new sql.Request().query('select * from Benefit_plans', (err, result) => {
            if (err){
                emitter.emit('error',err);
                throw err;
            }
            emitter.emit('result',result);
        })
    })
    sql.on('error', err => {
        emitter.emit('error',err);
    })
}
executeQuery.prototype = new EventEmitter();
module.exports = executeQuery;