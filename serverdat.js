var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res){
res.write("Date and time is : "+dt.abc());
res.end();
}).listen(8088);