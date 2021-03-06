var mysql = require('mysql');
var EventEmitter = require('events').EventEmitter;
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

function executeQuery(cmd, paramters) {
  var emitter = this;
  con.query(cmd, paramters, function (err, results) {
    if (err) {
      emitter.emit('error', err);
    }
    emitter.emit('results', results);
  });
}
executeQuery.prototype = new EventEmitter();

module.exports = {
  executeQuery
};