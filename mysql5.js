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
	var sql = "INSERT INTO employee (empno, name, address) VALUES?";
	var values = [
	[100, 'A', 'Z'],
	[100, 'B', 'Y'],
	[100, 'C', 'Z'],
	[100, 'D', 'X'],
	[100, 'E', 'Z'],
	[100, 'F', 'M']
	];
	con.query(sql, [values], function(err, result){
		if(err) throw err;
		console.log("Number of record inserted : "+result.affectedRows);
	});	
});