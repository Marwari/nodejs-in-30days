var express = require('express');
var app = module.exports = express();
var sql = require("mysql");
var http = require('http');
var url = require('url');
var routes = require('routes');
var moment = require('moment');

var path = require('path');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
app.use(flash());
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ cookie: { maxAge: 60000 },
                  secret: 'woot',
                  resave: false,
                  saveUninitialized: false}));
//database
var con = sql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
	database: "hotel"
});
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
//app.use(app.router);

app.get('/', function(req, res){
	res.render('index', {sayHelloTo: 'world'});
});

app.get('/signup', function(req, res){
	res.render('signup');
});

app.get('/addmenu', function(req, res){
	var sql = "Select * from foodMenu";
	con.query(sql,req.body,function(err,rows){
		//res.send({"code":200,"success":rows});
		res.render('addMenu',{data:rows});
	});
});

app.post('/getPrice', function(req, res){
	var sql = "Select * from foodMenu where `foodmenu`.`id` = "+req.body.id;
	con.query(sql,function(err,rows){
		res.send(rows);
		//res.render('checkMenu',{data:rows});
	});
});

app.post('/bookOrder', function(req, res){
	var sql = "Select foodName from foodMenu where `foodmenu`.`id` ="+req.body.foodItem;
	con.query(sql,req.body,function(err,rows){
		req.body.foodName = rows[0].foodName;
		res.render('checkMenu',{dat_a:JSON.stringify(req.body),data:''});
		res.end();
	});
});

app.get('/allorders', function(req, res){
	var sql = "Select orderdetails.*,usertable.* from orderdetails INNER JOIN usertable ON orderdetails.oBy=usertable.id ORDER BY `orderdetails`.`oid` ASC";
	con.query(sql,function(err,rows){
		res.render('getOrder',{data:rows,dat_a:''});
	});
});

app.get('/myorders', function(req, res){
	var sql = "Select orderdetails.*,usertable.* from orderdetails INNER JOIN usertable ON orderdetails.oBy=usertable.id ORDER BY `orderdetails`.`oid` ASC";
	con.query(sql,function(err,rows){
		
		res.render('getOrder',{data:rows,dat_a:''});
	});
});

app.post('/paid', function(req, res){
	var now = moment();
	var formatted = now.format('YYYY-MM-DD HH:mm:ss')
	var sql = "INSERT INTO `orderdetails` (`oType`, `oList`, `oBy`,`oTime`) VALUES ('Home Delivery', '"+JSON.stringify(req.body)+"', '1','"+formatted+"')";
	con.query(sql,function(err,rows){
		if(err) throw err;
		//console.log(rows);
		//res.send(rows);
		res.redirect('checkmenu');
	});
});

app.get('/checkmenu', function(req, res){
	var sql = "Select id,foodName from foodMenu ORDER BY `foodmenu`.`id` ASC";
	con.query(sql,req.body,function(err,rows){
		res.render('checkMenu',{data:rows,dat_a:''});
	});
});

app.get('/login', function(req, res){
	res.render('login');
});

app.get('/alluser', function(req, res){
	var sql = "Select * from usertable where role >1";
	con.query(sql,req.body,function(err,rows){
		//res.send({"code":200,"success":rows});
		res.render('alluser',{data:rows});
	});
});

app.get('/edit/:userId', function (req, res) {
	var sql = "Select * from usertable where role >1 and id="+req.params.userId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.render('editUser',{page_title:'Edit Table',data:rows});
	});
})

app.get('/editFood/:fId', function (req, res) {
	var sql = "Select * from foodMenu where id="+req.params.fId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		if(rows.length){
			res.render('editFood',{page_title:'Edit Table',data:rows});
			res.end();
		}else{
			res.redirect('addMenu');
		}
	});
})

app.get('/delete/:userId', function (req, res) {
	var sql = "delete from usertable where role >1 and id="+req.params.userId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect('/alluser');
	});
})

app.get('/deleteFood/:fId', function (req, res) {
	var sql = "delete from foodMenu where id="+req.params.fId;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect('/addmenu');
	});
})

app.post('/updateFood', function (req, res) {
	var sql = "Update foodMenu set foodName = '"+req.body.foodName +"', foodType ='"+req.body.foodType +"', priceFull ='"+req.body.priceFull +"', priceHalf ='"+req.body.priceHalf +"'  where id="+req.body.id;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect('/addmenu');
	});
})

app.post('/update', function (req, res) {
	var sql = "Update usertable set firstName = '"+req.body.firstName +"', lastName ='"+req.body.lastName +"', contact ='"+req.body.contact +"', address ='"+req.body.address +"'  where id="+req.body.id;
	con.query(sql,function(err,rows){
		if(err) throw err;
		res.redirect('/alluser');
	});
})

app.post('/register', function (req, res) {
	bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
		//save to db
		req.body.password = bcryptedPassword;
		req.body.role = '2';
		var sql = "Insert into usertable SET ?";
		con.query(sql,req.body,function(err,rows){
			if(err){
				console.log(err);
				//req.flash('signupSuccess', err);
			}else{
				//req.flash('signupSuccess', 'This is a flash message using the express-flash module.');
				res.redirect('/signup');
			}
		});
	});
})

app.post('/addFood', function (req, res) {
	var sql = "Insert into foodMenu SET ?";
	con.query(sql,req.body,function(err,rows){
		if(err){
			console.log(err);
			//req.flash('signupSuccess', err);
		}else{
			//req.flash('signupSuccess', 'This is a flash message using the express-flash module.');
			res.redirect('/addmenu');
		}
	});
})

app.post('/myaccount', function (req, res,next) {
	var sql = "Select * from usertable where username = '"+req.body.userName +"'";
	con.query(sql,req.body,function(err,rows){
		if(err){
			console.log(err);
		}else{
			if(rows.length>0){
				bcrypt.compare(req.body.password, rows[0].password, function(err, resDa) {
					if(resDa) {
						if(rows[0].role == 1){
							res.render('userData',{data:rows});
							res.end();
						}else{
							res.render('userData',{data:rows});
							res.end();
						}
						//res.send('userPage',{"code":200,"success":"login sucessfull"});
					} else {
						// Passwords don't match
						res.send({"code":204,"success":"login Unsucessfull"});
					}
				});
			}else{
				res.send({"code":204,"success":"login Unsucessfull"});
			}
		}
		//res.end();
	});
})


if(!module.parent){
  app.listen(process.env.PORT || 3000, function(){
    console.log('up and running');
  });
}