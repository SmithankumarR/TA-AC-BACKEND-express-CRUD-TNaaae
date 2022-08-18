var express = require('express');
var router = express.Router();
// new form
router.get('/new', (req, res)=> {
    res.render('userForm')
})
// add new user
router.post('/', (req, res) => {
    var store = ''
    req.on('data',(chunk) => {
        store += chunk;
    })
    req.on('end',() => {
        res.send(store);
    });

})
// list users
router.get('/', (req, res) => {
    res.json(req.body);
});
// get specific user
router.get('/:id', (req, res) => {
    res.render('singleUser', { user: { name: "Charlie", email: "Charliechris@gmail.com", age : 22 } });
})
// updated user
router.put('/' , (req, res) => {
    res.render('updatedUser', {user : req.body});
});
// delete user
router.delete('/:id', (req, res) => {
    res.send("User deleted successfully");
});

module.exports = router;