var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
displayForm(res);
});

function displayForm(res){
fs.readFile('form.html', function(err,data){
	if(err){
		console.log(err);
	} else {
res.writeHead(200,{'Content-Type':'text/html', 'Content-Length': data.length
});
res.write(data);
res.end();
	}
});
}
server.listen(1185);
console.log('Server listening at 1185');