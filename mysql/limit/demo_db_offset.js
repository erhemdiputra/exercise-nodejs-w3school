var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});

// "SELECT * FROM customers LIMIT 5 OFFSET 2" equals "SELECT * FROM customers LIMIT 2, 5"
// The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"