let express = require('express');
let mongoose = require('mongoose');
let userRouter = require('./routes/users');
let logger = require('morgan');

mongoose.connect(" mongodb://127.0.0.1:27017/userDiary", { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
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
app.use(logger('dev'));
//handle static data
app.use(express.static(__dirname + '/public'));

//router middleware
app.use('/users', userRouter);


//error handler

//404
app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
    res.send(err);
});

//listen
app.listen(5000, () => {
    console.log("Server is listening on port 5k");
});