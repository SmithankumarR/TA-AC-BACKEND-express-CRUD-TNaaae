var express = require('express');
var router = express.Router();
var User = require('../models/users');

router.get('/new', (req,res) => {
    res.render('usersForm')
});

router.post('/' ,(req,res) => {
    User.create(req.body,(err,userCreated) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/');
    })
});
 
module.exports = router; 
