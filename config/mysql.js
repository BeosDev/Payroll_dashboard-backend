var mysql = require('mysql');
var EventEmitter = require('events').EventEmitter;
var con;

function createConnection(db) {
  con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: db
  });
}

function executeQuery(cmd, paramters) {
  con.connect();
  var emitter = this;
  con.query(cmd, paramters, function (err, results) {
    if (err) {
      emitter.emit('error', err);
      throw err;
    }
    emitter.emit('results', results);
  });
  con.end();
}

executeQuery.prototype = new EventEmitter();
module.exports = {
  createConnection,
  executeQuery
};