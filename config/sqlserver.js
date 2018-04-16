const sql = require('mssql');
var EventEmitter = require('events').EventEmitter;
var knex = require('knex')({
    client: 'mssql'
})
const config = {
    user: 'sa',
    password: '',
    server: 'DESKTOP-GN3V8MM\SQLEXPRESS',
    database: 'HR'
}
/*
query = {
    type,
    table,
    parameter,
    whereParameter,
}
*/
function executeQuery(query) {
    var emitter = this;
    var cmd;
    if (typeof query === 'string') {
        cmd = query;
    } else {
        var type = query.type.toString().toLowerCase();
        if (type === 'select') {
            cmd = knex(query.table).where(query.whereParameter).toString();
        } else if (type === 'insert') {
            cmd = knex(query.table).insert(query.parameter).toString();
        } else if (type === 'update') {
            cmd = knex(query.table).update(query.parameter).where(query.whereParameter).toString();
        } else if (type == 'delete') {
            cmd = knex(query.table).where(query.whereParameter).del().toString();
        }
    }
    console.log(cmd);
    sql.connect(config, err => {
        new sql.Request().query(cmd, (err, result) => {
            if (err) {
                emitter.emit('error', err);
                throw err;
            }
            emitter.emit('result', result);
        })
    })
    sql.on('error', err => {
        emitter.emit('error', err);
    })
}
/*
var q = {
    type: 'update',
    table: 'Benefit_Plans',
    parameter: {Plan_Name: 'em'},
    whereParameter: {'Benefit_Plan_ID': 2},
}
*/


executeQuery.prototype = new EventEmitter();

module.exports = {executeQuery};