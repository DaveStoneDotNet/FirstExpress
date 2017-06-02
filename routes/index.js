
// Last-minute hotfix to add a more important arbritrary variable.
var fruit = 'bananas';

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
