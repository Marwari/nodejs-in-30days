var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var path = require('path');
var bodyParser = require('body-parser');

//var testtable = require('./routes/testtable');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); 
var mysql = require('mysql');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, "js")));



var  con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"market"
});


app.get('/',function(req,res)
{
res.render('index',{page_title:'Home'});
});

app.get('/about',function(req,res){
	
	
	res.render('about');

})
app.get('/offers',function(req,res){
	
	
	res.render('offers');

})
app.get('/admin',function(req,res){
	
	
	res.render('admin');

})
app.get('/contact',function(req,res){
	
	
	res.render('contact');

})

app.get('/fruits',function(req,res){
	
	
	res.render('fruits');

})
app.get('/vegetables',function(req,res){
	
	
	res.render('vegetables');

})
app.get('/dairyproducts',function(req,res){
	
	
	res.render('dairyproduct');

})
app.get('/organicproducts',function(req,res){
	
	
	res.render('organicproduct');

})
app.get('/login',function(req,res){
	
	
	res.render('login');

})

app.get('/register',function(req,res){
	
	res.render('register');
})

app.get('/users',function(req,res){
	con.connect(function(err){
		if(err) throw err;
		console.log('Connected');
		var sql = "Select * from signup";
		con.query(sql,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			res.render('testtable',{page_title:'Test Table',data:rows});
		});
		
		
	
	
	});
	
	
	
	
})
app.post('/register1',function(req,res){
	var  fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var pass=req.body.password;
	con.connect(function(err){
		if(err)
	throw  err;
console.log("ccc");
  var  sql="insert  into signup values('','"+fname+"','"+lname+"','"+email+"','"+pass+"')";
    con.query(sql,function(err,result)
	{
		if(err) throw err;
		 if(result)
		 {
			res.render('login');
		 }else{
			console.log("Data  not  inserted"); 
		 } 
		 res.end();
	});
	
	});
})

app.post('/login1',function(req,res){
	var email=req.body.email;
	var pass=req.body.password;
	if(email=="admin@gmail.com" && pass=="admin")
		 {
			 res.render('admin');
		 }
		 else{
		var sql="select * from signup where email='"+email+"' and password='"+pass+"'  ";
		 con.query(sql,function(err,result)
		 {
			 if(err) throw err;
			if(result)
			{
			
				res.render('index');
			
			}
			else{
				console.log("Incorrect credentials...");
			}
			res.end();
		 });
		 }	 
		 
	console.log("login");	
})

app.get('/delete/:userId', function (req, res) {
    //res.send(req.params);
	var sql = "delete from signup where id="+req.params.userId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect('/users');
	});
})

app.get('/edit/:userId', function (req, res) {
	var sql = "Select * from signup where id="+req.params.userId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.render('editUser',{page_title:'Edit Table',data:rows});
	});
})
app.get('/custSearch', function (req, res) {
	var query=url.parse(req.url,true).query;
	var sql = "Select * from signup where name Like '%"+query.userVal+"%'";
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.render('search',{page_title:'Test Table',data:rows});
	});
})
app.post('/search', function (req, res) {
	var sql = "Select * from signup where name Like '%"+req.body.userVal+"%'";
	//res.send(sql);
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.render('testtable',{page_title:'Test Table',data:rows});
	});
})

app.post('/update', function (req, res) {
    
	var sql = "Update signup set fname = '"+req.body.fname+"',lname ='"+req.body.lname+"', email ='"+req.body.email +"' where id='"+req.body.userId+"'";
	
	
	console.log(sql);
	con.query(sql,function(err,rows){
		if(err) throw err;
		
		if(rows)
		{
		
		//res.render('testtable',{ss:12});
		
		res.redirect('/users');
		
		
		}
		else{
			
			console.log("not");
		}
		
});
	//console.log("Update");
	
	
	//res.end();
	
	
})

http.createServer(app).listen(app.get('port'),function(){
	console.log('Express Server listening on Port '+app.get('port'));
});