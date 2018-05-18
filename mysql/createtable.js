var mysqldb = require('mysql')

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
        var sql = "create table friends (name varchar(32), id int(8), location varchar(32))"
        connection.query(sql, function(err, suc){
            if(err){
                throw err
            }else{
                console.log("Table Created!!!")
            }
        })

    }
})