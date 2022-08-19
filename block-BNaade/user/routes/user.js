var express = require('express');
var router = express.Router();
var User = require('../models/users');

router.get('/new', (req, res) => {
    res.render('usersForm')
});

router.post('/', (req, res) => {
    User.create(req.body, (err, userCreated) => {
        if (err) return res.redirect('/users/new');
        res.redirect('/users');
    })
});
router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        console.log(users)
        if (err) return next(err);
        res.render('user', { users: users });
    })
});
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) return next(err);
        res.render('singleUser', { user: user })
    })
});
router.get('/:id/edit', (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) return next(err);
        res.render('editForm', { user: user })
    });
});
router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, Updateduser) => {
        if (err) return next(err);
        res.redirect('/users/' + id);
    })
});
module.exports = router; 
