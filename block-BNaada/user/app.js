// requires
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/user", (err) => {
    console.log(err ? err : "Connected to database")
})
// instantiate the express
var app = express();

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', indexRouter);
app.use('/users', userRouter);

// error handler

// 404
app.use((req, res, next) => {
    res.send("Page not found")
})

// custom error handler
app.use((err, req, res, next) => {
    res.send(err)
})

// listen
app.listen(3000, () => {
    console.log("listening on port 3000...");
})