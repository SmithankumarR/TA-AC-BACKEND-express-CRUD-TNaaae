// express
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/server", (err) => {
    console.log(err ? err : "Connected to databse")
})
// instantiate
var app = express();

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router middleware
app.use('/', require('./routes/index'));
app.use('/students', require('./routes/student'));

// error handler middlware
app.use((req, res, next) => {
    res.send("Page Not Found 404");
})
// listen
app.listen(3000, () => {
    console.log("listening on port 3000...");
})