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
        var sql = "insert into friends (id, name, location) values ?"
        var records = [
            [2, 'mohan', 'ajmer'],
            [3, 'moni', 'mp'],
            [4, 'turi', 'oska'],
            [5, 'kata', 'hiroshima'],
            [6, 'adrian', 'brazil']
        ]
        connection.query(sql, [records], function(err, suc){
            if(err){
                throw err
            }else{
                console.log("so many row Created!!!")
            }
        })

    }
})