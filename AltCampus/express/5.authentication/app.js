var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require("express-session");
let MongoStore = require("connect-mongo")(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

let mongoose = require("mongoose");
// connecting mongoose to mongodb server
mongoose.connect("mongodb://localhost/assignmentUserList", {useNewUrlParser: true}, (err) => {
  err ? console.log("Mongoose not connected to mongoDB.") : console.log("Mongoose connected to mongoDB.");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// integrating sessions
app.use(session({
  secret: "string to encrypt the cookies",
  resave: false,
  saveUninitialised: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
  }),
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
