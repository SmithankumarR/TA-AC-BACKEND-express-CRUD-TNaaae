// express
var express = require('express');
var mongoose = require('mongoose');

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/server", {useNewUrlParser : true, useUnifiedTopology : true}, (err) => {
    console.log(err ? err : "Connected to database")
})
// instantiate
var app = express();

// middleware
app.set('view engine', 'ejs');
app.set('views', (__dirname, 'views'));

app.use((req,res,next) => {
    res.locals.message = "Created School Ecpress server"
    next();
})

// routes
app.get('/', (req,res) => {
    res.send("hey")
})

app.get('/students', (req,res) => {
    var students = { name : "John", email : "john@example.com" };
    res.render('students', {students : students});
});


// error handler
app.use((err,req,res,next) => {
    res.send("Page Not Found");
})

// listen
app.listen(3000, ()=> {
    console.log("listening on port 3000...");
})