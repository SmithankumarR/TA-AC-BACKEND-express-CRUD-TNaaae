var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.render('Hey welcome to Indexpage!');
});

module.exports = router;