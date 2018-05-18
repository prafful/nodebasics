var mysqldb = require('mysql')
var http = require('http')

var data = null;

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'root1',
    database:'fromnode'
})

connection.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("Connected to the MySQL Server")
        /* connection.query("create database fromnode", function(err, suc){
            if(err){
                throw err
            }else{
                console.log("Database Created!!!")
            }
        }) */
        var sql = "select name, id from friends"
        connection.query(sql, function(err, result, suc){
            if(err){
                throw err
            }else{
                console.log(JSON.stringify(result))
                data = JSON.stringify(result)
            }
        })

    }
})


var myserver = http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type':'text/html'})
    response.write("JSON data from server!!!")
    response.write("<br>")
    response.write(data)
    response.end();
})

myserver.listen(8888)
