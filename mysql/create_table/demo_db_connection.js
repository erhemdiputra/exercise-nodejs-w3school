var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dota2"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    sql = "SELECT * FROM players";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});
