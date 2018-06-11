// requires
var express = require('express');
var routes = require('routes');
var http = require('http');
var path = require('path');

//Including controller/dao for testtable
var testtable = require('./routes/testtable'); 
var app = express();

var mysql = require('mysql');
// all environments
app.set('port', process.env.PORT || 4302);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
// development only


var con = mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"1234",
		database: "demo"
	});
app.get('/testtable', testtable.list);

var  url=require('url');

app.get('/register', function(req, res){
	res.sendFile(__dirname + "/public/register.html");

})	



app.get('/register_action' , function(req, res){
	
	 var  qq=url.parse(req.url,true).query;
var username=qq.user_name;
var password=qq.user_password;

con.connect(function(err){
		if(err) throw err;
		console.log("Connected!");
		
var sql = "insert into login values('"+username+"','"+password+"')";
			con.query(sql, function (err, result) {
				if (err) throw err;
			if(result.length){
  			res.redirect('/testtable');
			res.end();
			}
		else
		{
			 res.send("Not  inserted");
		res.end();
}
			  }); 
	});


	
})	


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});