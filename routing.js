var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/kml";
var str = "";

app.route('/id').get(function(req, res) {
	MongoClient.connect(url, function(err, db){
		var collection = db.collection('customers');
		var cursor = collection.find({});
		str = "";

		cursor.forEach(function(item){
			if(item != null){
				str = str + " Employee id" + item.name +"</br>";
			}
		}, function(err){
			res.send(str);
			db.close();
		});
	})
})
var server = app.listen(8080, function(){});
console.log("listening at 8080");