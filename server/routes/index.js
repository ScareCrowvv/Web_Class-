var express = require('express');
var router = express.Router();

// Route to render the home page with /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// Route to render the home page with /home
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
