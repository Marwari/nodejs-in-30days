var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user: "root",
	password : "1234"
	database: "nodep34"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
	var sql = "INSERT INTO employee (empno, name, address) VALUES(1, 'Bharat', 'Ambala')";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log("1 record inserted");
	});
});