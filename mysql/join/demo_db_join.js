var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb2"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, products.name as favorite FROM users" + 
    " JOIN products ON users.favorite_product = products.id";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});

// You can use INNER JOIN instead of JOIN. They will both give you the same result.
// Left Join : SELECT users.name AS user, products.name as favorite FROM users LEFT JOIN products ON users.favorite_product = products.id
// Right Join : SELECT users.name AS user, products.name as favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id