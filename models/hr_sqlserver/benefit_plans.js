var pool = require('../../config/pool_sqlserver');

function getData(callback)
{
    var connection = pool.connect(function(err){
        if(err)
        {
            throw err;
        }
        //check for err
        var request = pool.request(connection);
        request.query('select * from account', function(err,data){
           
            callback(data);
        });
    });

}
//getData(function(data){
  //  console.log(data);
//});
module.exports = getData;