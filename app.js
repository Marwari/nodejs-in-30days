var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var url = 'mongodb://localhost/books';

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.render('index');
});
app.post('/search', function(req, res){
	mongoose.connect(url, function(err, db){
		db.collection('books').aggregate([
			{ $lookup : {
				from : 'author',
				localField: 'book_name',
				foreignField : 'bname',
				as : "book"
			}}]).toArray({
			function(err, response){
				console.log('Output=====');
				if(err) throw err;
				console.log(response);
				res.renser('result', {
					pagedata : response
				});
				res.end();
			}
		});
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
