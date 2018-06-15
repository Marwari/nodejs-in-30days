var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/kml";

mongoose.connect(url, function (err, db) {
	if(err) throw err;
	var mysort = {name : -1};
	db.collection("customers").find().sort(mysort).toArray(function(err, result){
		if(err) throw err;
		console.log(result);
	})

});