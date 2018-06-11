var mysql = require('mysql');
export.list = function(req, res){
	var con = mysql.createConnnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'demo'
	});
	con.connect(function(err){
		if(err) throw err;
		console.log('Connected');
		
		var sql = "select *from login";
		con.query(sql, function(err, rows){
			if(err) throw err;
			console.log(result[0].rows);
			
			res.render('testtable', {page_title:"Test Table", data:rows});
		});
	});
};