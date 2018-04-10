const sql = require('mssql')
const pool = new sql.ConnectionPool({
    user: 'sa',
    password: '',
    server: 'HELLOWORLD\\SQLEXPRESS',
    database: 'HR'
})

/*
pool.connect(err => {
    if (err) throw err;
    pool.request() // or: new sql.Request(pool1)
    .query('select * from account', (err, result) => {
        // ... error checks
 
        console.log(result)
    })
});

*/
module.exports = pool;