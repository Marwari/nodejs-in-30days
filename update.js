var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/kml";

mongoose.connect(url, function (err, db) {

	db.collection('Employee').updateOne({
		"name":"aaa"
	}, {
		$set:{
			"name":"Mohan"
		}
	});
	console.log("Updated");
	db.close();

});