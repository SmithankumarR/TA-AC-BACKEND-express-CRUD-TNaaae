var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.send('Hey welcome to Indexpage!');
});

module.exports = router;