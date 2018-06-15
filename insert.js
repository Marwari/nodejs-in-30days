var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/kml";

mongoose.connect(url, function (err, db) {
	if(err) throw err;
	db.collection('Employee').insertOne({
		name:"aaa",
		id:2
	});
			console.log("Value Inserted");

});