// express
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/server", (err) => {
    console.log(err ? err : "Connected to database")
})

// instantiate
var app = express();

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

// routes
app.use('/',require('./routes/index'))
app.use('/users', require('./routes/user'));

// error handler
app.use((req,res,next) => {
    res.send("Page not Found")
})

// listen
app.listen(3000, ()=> {
    console.log("listening on port 3000...");
})