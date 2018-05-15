const sql = require('mssql');
var EventEmitter = require('events').EventEmitter;
var knex = require('knex')({
    client: 'mssql'
})
const config = {
    user: 'sa',
    password: '123456',
    server: 'HELLOWORLD\\SQLEXPRESS',
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
        } else if (type === 'delete') {
            cmd = knex(query.table).where(query.whereParameter).del().toString();
        } else if (type === 'join'){
            cmd = knex(query.table).join(query.joinParameter.table, query.joinParameter.col1, '=', query.joinParameter.col2).where(query.whereParameter);
        }
    }
    console.log(cmd);
    // sql.connect(config, err => {
    //     new sql.Request().query(cmd, (err, result) => {
    //         if (err) {
    //             //console.log('loi');
    //             emitter.emit('error', err);
    //             throw err;
    //         }
    //         emitter.emit('results', result);
    //     })
    // })
    // sql.on('error', err => {
    //     emitter.emit('error', err);
    // })

    const pool = new sql.ConnectionPool(config, err => {
        if (err){
            return emitter.emit('error',err);
        }
        pool.request() // or: new sql.Request(pool1)
        .query(cmd, (err, result) => {
            if (err) {
                //console.log('loi');
                emitter.emit('error', err);
                return err;
            }
            emitter.emit('results', result);
        })
     
    })
     
    pool.once('error', err => {
        emitter.emit('error', err);
    })
}

var q = {
    type: 'select',
    table: 'Benefit_Plans',
    parameter: {},
    whereParameter: {'Benefit_Plan_ID': 3},
}
executeQuery.prototype = new EventEmitter();
// var k = new executeQuery(q);
// k.once('results',data => {console.log(data)});




module.exports = {executeQuery};