var express = require('express');
var router = express.Router();

// GET home page. 

router.get('/', function(req, res, next){
    res.render('index', { title: 'Express' });
});

router.get('/car', function (req, res, next) {
    res.render('car', {
        title: 'car'
    });
});


//hiding a route
// router.get('/', ensureAuthenticated, function (req, res, next) {
//     res.render('index', {
//         title: 'Express'
//     });
// });

// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/users/signin');
// }

module.exports = router;