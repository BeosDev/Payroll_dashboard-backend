var mysql = require('mysql');
var EventEmitter = require('events').EventEmitter;
var con;

function createConnection(db) {
  con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: db
  });
}

function executeQuery(cmd, paramters) {
  var emitter = this;
  con.query(cmd, paramters, function (err, result) {
    if (err) {
      emitter.emit('error', err);
      throw err;
    }
    emitter.emit('result', result);
  });
}
executeQuery.prototype = new EventEmitter();

module.exports = {
  createConnection,
  executeQuery
};