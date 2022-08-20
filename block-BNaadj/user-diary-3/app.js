let express = require('express');
let mongoose = require('mongoose');
let logger = require('morgan');
let usersRouter = require('./routes/users');
let indexRouter = require('./routes/index');

mongoose.connect('mongodb://127.0.0.1:27017/userDiaryIII', { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
    console.log(err ? err : "connected to db");
});

//instantiating express
let app = express();

//middleware

//setup template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//handle form data 
app.use(express.urlencoded({extended: false}));

//logger
app.use(logger('dev'));

//routing middlewares
app.use('/', indexRouter);
app.use('/users', usersRouter);

//error handler

//404
app.use((req, res, next) => {
    res.status(404).send("Page Not Found");
});

//custom error
app.use((err, req, res, next) => {
    res.send(err);
});

//listen
app.listen(5000, () => {
    console.log("Serever is listeniing on port 5k");
});