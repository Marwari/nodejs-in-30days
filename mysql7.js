var mysql = require('mysql');

// all environments
app.set('port')


app.use(express.json());
//app.use(express.urlencoded());


var con = mysql.createConnection({
	host = 'localhost',
	user = 'root',
	password : '1234',
	database: 'demo'
});

app.get('/testtable', testtable.list);

http.createServer(app).listen(app.get('port'), function({
	console.log('server i slisting at '+app.get('port'))
});
)