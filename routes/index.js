var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

module.exports = router;
