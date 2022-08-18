var express = require('express');
var User = require('../models/users');
var router = express.Router();

router.get('/new', (req,res) => {
    res.render('users')
});

router.post('/' ,(req,res,next) => {
    console.log(req.body);
    User.create(req.body,(err,userCreated) => {
        if(err) return next(err);
        res.send(userCreated);
    })
});

router



module.exports = router;
