var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'root1'
})

connection.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("Connected to the MySQL Server")
        connection.query("create database fromnode", function(err, suc){
            if(err){
                throw err
            }else{
                console.log("Database Created!!!")
            }
        })
    }
})