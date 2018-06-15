var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/kml";

mongoose.connect(url, function (err, db) {
	if(err) throw err;
	
	var myquery = {name:"abc"};
	db.collection("customers").deleteOne(myquery, function(err, obj){
		if (err) throw err;
		console.log("1 doc deleted");
		db.close();
	})

});