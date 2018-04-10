const sql = require('mssql')
const pool = new sql.ConnectionPool({
    user: 'sa',
    password: 'chuot123',
    server: 'HELLOWORLD\\SQLEXPRESS',
    database: 'HR'
})

/*
pool.connect(err => {
    if (err) throw err;
    pool.request() // or: new sql.Request(pool1)
    .query('select * from Employment', (err, result) => {
        // ... error checks
 
        console.log(result)
    })
});
*/
module.exports = pool;