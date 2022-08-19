var express = require('express');
var router = express.Router();
var User = require('../models/users');

router.get('/new', (req,res) => {
    res.render('usersForm')
});

router.post('/' ,(req,res) => {
    User.create(req.body,(err,userCreated) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/users');
    })
});
 router.get('/',(req, res,next) => {
     User.find({}, (err,user) => {
        console.log(user)
        if(err) return next(err);
        res.render('alluser', {user: user});
        res.send(user)
    })
 });
 router.get('/:id',(req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser')
    })
 })
module.exports = router; 
