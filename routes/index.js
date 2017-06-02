var express = require('express');
var router = express.Router();

/* GET home page. */
var renderOptions = { 
                        title: 'Express II' 
                    };

router.get('/', function (req, res) {
    res.render('index', renderOptions);
});

module.exports = router;
