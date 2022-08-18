var express = require('express');

var router = express.Router();

router.get('/', (req,res) => {
    res.send("Hey Welcome to Index Page!");
})

module.exports = router;