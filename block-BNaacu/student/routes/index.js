var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Welcome Student System")
})

module.exports = router;