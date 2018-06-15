var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/kml";

mongoose.connect(url, function (err, db) {
	var cursor = db.collection('customers').find();
		cursor.each(function(err, doc){
			console.log(doc);
		})

});