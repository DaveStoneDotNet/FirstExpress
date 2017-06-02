
// Making changes for reported Issue #53. Adding arbitrary variable.
var monkey = 'chimp';

var express = require('express');
var router = express.Router();

// GET home page....
var renderOptions = { 
                        title: 'Express III' 
                    };

router.get('/', function (req, res) {
    res.render('index', renderOptions);
});

module.exports = router;
